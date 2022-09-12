import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import cl from "./Auth.module.css"
import { setDoc, doc } from "firebase/firestore";
import { MyInput } from "../ui/myInput/MyInput";
import { MyButton } from "../ui/myButton/MyButton";
import { IDefaultStateDataUser } from "../../types/userDataReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Auth: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth, firestore } = useContext(Context);
    const [allUsers] = useCollectionData(
        firestore.collection("allUsers")
    )
    const [messageNewUser, setMessageNewUser] = useState<boolean>(false);
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phone, setPhone] = useState("");
    const [userId, setUserId] = useState();
    const [userEmail, setUserEmail] = useState();
    const [gender, setGender] = useState<string>("men");
    const [photo, setPhoto] = useState<string>("https://firebasestorage.googleapis.com/v0/b/search-neighbor.appspot.com/o/defaultAvatarMen.png?alt=media&token=74eecafc-85c3-44ac-b356-26fe18ac717f");

    useEffect(() => {
        if (gender === "men") {
            setPhoto("https://firebasestorage.googleapis.com/v0/b/search-neighbor.appspot.com/o/defaultAvatarMen.png?alt=media&token=74eecafc-85c3-44ac-b356-26fe18ac717f")
        } else if (gender === "women") {
            setPhoto("https://firebasestorage.googleapis.com/v0/b/search-neighbor.appspot.com/o/defaultAvatarWomen.png?alt=media&token=07540115-1cef-479c-abef-a72e7a386b26")
        }
    }, [gender])

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);

        setUserId(user.uid)
        setUserEmail(user.email)

        checkUser(user.uid)
    }

    const checkUser = (id: string) => {
        let flag = 0;
        if (allUsers) {

            for (let i = 0; i < allUsers.length; i++) {
                if (allUsers[i].id === id) {
                    let userData: IDefaultStateDataUser = {
                        name: allUsers[i].name,
                        firstName: allUsers[i].firstName,
                        id: allUsers[i].id,
                        phone: allUsers[i].phone,
                        email: allUsers[i].email,
                        gender: allUsers[i].gender,
                        photo: allUsers[i].photo,
                    }

                    addDataUserAndAuthState(userData)

                    flag = 1;
                }
            }

            if (flag === 0) {
                setMessageNewUser(true)
            } else {
                navigate("/advs")
            }
        }
    }

    const addUserInDB = async () => {
        if (name && firstName && phone) {
            await setDoc(doc(firestore, "allUsers", `user_${userId}`), {
                id: userId,
                email: userEmail,
                name: name,
                firstName: firstName,
                phone: phone,
                gender: gender,
                photo: photo,
            });

            const user = {
                id: userId,
                email: userEmail,
                name: name,
                firstName: firstName,
                phone: phone,
                gender: gender,
                photo: photo,
            }

            dispatch({ type: "addUserData", payload: user })

            navigate("/profile")
        }
    }

    const addDataUserAndAuthState = (user: IDefaultStateDataUser) => {
        dispatch({ type: "addUserData", payload: user })
        dispatch({ type: "auth" })
    }

    return (
        <div className={cl.auth}>
            {messageNewUser
                ?
                <div className={cl.newUser}>
                    <h1 className={cl.title}>Мы рады приветствовать нового пользователя на нашем сервисе!</h1>
                    <p>Укажите, пожалуйста, как мы можем к Вам обращаться, а так же контактные телефон, по которому с Вами можно связаться.</p>

                    <div className={cl.data}>
                        <div className={cl.nameInput}>
                            <MyInput
                                width="300px"
                                height="30px"
                                placeholder="Имя"
                                value={name}
                                setValue={setName}
                            />
                        </div>

                        <div className={cl.firstNameInput}>
                            <MyInput
                                width="300px"
                                height="30px"
                                placeholder="Фамилия"
                                value={firstName}
                                setValue={setFirstName}
                            />
                        </div>

                        <div className={cl.gender}>
                            <div className={gender === "men" ? cl.men + " " + cl.genderActive : cl.men} onClick={() => setGender("men")}>Мужской</div>
                            <div className={gender === "women" ? cl.women + " " + cl.genderActive : cl.women} onClick={() => setGender("women")}>Женский</div>
                        </div>

                        <div className={cl.phoneInput}>
                            <MyInput
                                width="300px"
                                height="30px"
                                placeholder="Телефон"
                                value={phone}
                                setValue={setPhone}
                            />
                        </div>

                        <div className={cl.button} onClick={addUserInDB}>
                            <MyButton
                                width="312px"
                                height="40px"
                                bg="rgb(145, 35, 35)"
                                color="white"
                                name="Отправить"
                            />
                        </div>
                    </div>
                </div>
                :
                <div className={cl.windowAuth}>
                    <p onClick={login}>ВОЙТИ</p>
                </div>
            }
        </div>
    )
}

export { Auth }