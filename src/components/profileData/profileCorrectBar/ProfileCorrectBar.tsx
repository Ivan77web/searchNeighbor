import { getStorage, ref, uploadBytes } from "@firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Context } from "../../..";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IProfileCorrectBarProps } from "../../../types/ProfileCorrectBar";
import { MyButton } from "../../ui/myButton/MyButton";
import { MyInput } from "../../ui/myInput/MyInput";
import { PhotoBlock } from "./photoBlock/PhotoBlock";
import cl from "./ProfileCorrectBar.module.css"

const ProfileCorrectBar: React.FC<IProfileCorrectBarProps> = ({ setOpenCorrectBar }) => {
    const dispatch = useDispatch()
    const storage = getStorage();
    const { firestore } = useContext(Context);
    const { name, firstName, phone, gender, id, photo, email } = useTypedSelector(state => state.userData);
    const [nameValue, setNameValue] = useState(name);
    const [firstNameValue, setFirstNameValue] = useState(firstName);
    const [phoneValue, setPhoneValue] = useState(phone);
    const [genderValue, setGenderValue] = useState(gender);
    const [img, setImg] = useState<File | null>()

    const saveData = async (src: string) => {
        await updateDoc(doc(firestore, "allUsers", `user_${id}`), {
            name: nameValue,
            firstName: firstNameValue,
            phone: phoneValue,
            gender: gender,
            photo: src || photo,
        });

        const userData = {
            name: nameValue,
            firstName: firstNameValue,
            phone: phoneValue,
            id: id,
            email: email,
            gender: genderValue,
            photo: src || photo
        }

        dispatch({ type: "addUserData", payload: userData })

        setOpenCorrectBar(false);
    }

    const savePhoto = () => {
        if(nameValue && firstNameValue && phoneValue && genderValue && img){
            const storageRef = ref(storage, `userAvatar_${id}`);
            
            uploadBytes(storageRef, img).then( () => getDownloadURL(ref(storage, `userAvatar_${id}`)).then( src => {
                saveData(src)
            }))
        } else if(nameValue && firstNameValue && phoneValue && genderValue) {
            saveData("")
        } else {
            alert("Введите все данные")
        }
    }

    return (
        <div className={cl.correctData + " " + cl.notCopy}>
            <div className={cl.input}>
                <MyInput width="300px" height="20px" placeholder="Имя" value={nameValue} setValue={setNameValue} />
            </div>

            <div className={cl.input}>
                <MyInput width="300px" height="20px" placeholder="Фамилия" value={firstNameValue} setValue={setFirstNameValue} />
            </div>

            <div className={cl.input}>
                <MyInput width="300px" height="20px" placeholder="Телефон" value={phoneValue} setValue={setPhoneValue} />
            </div>

            <div className={cl.genders}>
                <div
                    className={genderValue === "men" ? cl.gender + " " + cl.men + " " + cl.activeGender : cl.gender + " " + cl.men}
                    onClick={() => setGenderValue("men")}
                >
                    Мужской
                </div>

                <div
                    className={genderValue === "women" ? cl.gender + " " + cl.women + " " + cl.activeGender : cl.gender + " " + cl.women}
                    onClick={() => setGenderValue("women")}
                >
                    Женский
                </div>
            </div>

            <div className={cl.photoBlock}>
                <PhotoBlock setImg={setImg}/>
            </div>

            <div className={cl.buttons}>
                <div className={cl.button + " " + cl.cancel} onClick={() => setOpenCorrectBar(false)}>
                    <MyButton width="150px" height="30px" color="white" bg="rgb(145, 35, 35)" name="Отменить" />
                </div>

                <div className={cl.button + " " + cl.save} onClick={savePhoto}>
                    <MyButton width="150px" height="30px" color="white" bg="rgb(47, 94, 53)" name="Сохранить" />
                </div>
            </div>
        </div>
    )
}

export { ProfileCorrectBar }