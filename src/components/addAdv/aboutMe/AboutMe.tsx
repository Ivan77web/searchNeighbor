import React, { useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MyInput } from "../../ui/myInput/MyInput";
import { MyTextarea } from "../../ui/myTextarea/MyTextarea";
import cl from "./AboutMe.module.css"

const AboutMe: React.FC = () => {
    const { name, firstName, phone } = useTypedSelector(state => state.userData)
    const [nameValue, setNameValue] = useState(name)
    const [firstNameValue, setFirstNameValue] = useState(firstName)
    const [phoneValue, setPhoneValue] = useState(phone)
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [aboutMe, setAboutMe] = useState("")
    const [gender, setGender] = useState("men")

    return(
        <div className={cl.aboutMe}>
                <p className={cl.intro}>Обо мне</p>

                <div className={cl.oneInput}>
                    <MyInput width="400px" height="30px" placeholder="Имя" value={nameValue} setValue={setNameValue} />
                </div>

                <div className={cl.oneInput}>
                    <MyInput width="400px" height="30px" placeholder="Фамилия" value={firstNameValue} setValue={setFirstNameValue} />
                </div>

                <div className={cl.oneInput}>
                    <MyInput width="400px" height="30px" placeholder="Номер телефона" value={phoneValue} setValue={setPhoneValue} />
                </div>

                <div className={cl.oneInput}>
                    <MyInput width="400px" height="30px" placeholder="Город" value={city} setValue={setCity} />
                </div>

                <div className={cl.oneInput}>
                    <MyInput width="400px" height="30px" placeholder="Возраст" value={age} setValue={setAge} />
                </div>

                <div className={cl.choiceGender}>
                    <div className={gender === "men" ? cl.men + " " + cl.active : cl.men} onClick={() => setGender("men")}>Мужской</div>
                    <div className={gender === "women" ? cl.women + " " + cl.active : cl.women} onClick={() => setGender("women")}>Женский</div>
                </div>

                <div className={cl.oneInput}>
                    <MyTextarea width="400px" height="100px" placeholder="Обо мне" value={aboutMe} setValue={setAboutMe} />
                </div>
            </div>
    )
}

export {AboutMe}