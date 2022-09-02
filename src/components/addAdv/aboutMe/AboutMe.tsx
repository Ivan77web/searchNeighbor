import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { actionType } from "../../../types/advDataReducer"
import cl from "./AboutMe.module.css"
import { MyInputRedux } from "../../ui/myInputRedux/MyInputRedux";
import { MyTextareaRedux } from "../../ui/myTextareaRedux/MyTextareaRedux";

const AboutMe: React.FC = () => {
    const dispatch = useDispatch()
    const {
        nameValue,
        firstNameValue,
        phoneValue,
        age,
        city,
        aboutMe,
        myGender,
    } = useTypedSelector(state => state.advData)

    return (
        <div className={cl.aboutMe}>
            <p className={cl.intro}>Обо мне</p>

            <div className={cl.oneInput}>
                <MyInputRedux width="400px" height="30px" placeholder="Имя" value={nameValue}  typeForDispatch={actionType.setNameValue}/>
            </div>

            <div className={cl.oneInput}>
                <MyInputRedux width="400px" height="30px" placeholder="Фамилия" value={firstNameValue} typeForDispatch={actionType.setFirstNameValue}/>
            </div>

            <div className={cl.oneInput}>
                <MyInputRedux width="400px" height="30px" placeholder="Номер телефона" value={phoneValue} typeForDispatch={actionType.setPhoneValue}/>
            </div>

            <div className={cl.oneInput}>
                <MyInputRedux width="400px" height="30px" placeholder="Город" value={city} typeForDispatch={actionType.setCity}/>
            </div>

            <div className={cl.oneInput}>
                <MyInputRedux width="400px" height="30px" placeholder="Возраст" value={age} typeForDispatch={actionType.setAge}/>
            </div>

            <div className={cl.choiceGender}>
                <div 
                    className={myGender === "men" ? cl.men + " " + cl.active : cl.men} 
                    onClick={() => dispatch({ type: actionType.setMyGender, payload: "men" })}
                >
                    Мужской
                </div>

                <div
                    className={myGender === "women" ? cl.women + " " + cl.active : cl.women} 
                    onClick={() => dispatch({ type: actionType.setMyGender, payload: "women" })}
                >
                    Женский
                </div>
            </div>

            <div className={cl.oneInput}>
                <MyTextareaRedux width="400px" height="100px" placeholder="Обо мне" value={aboutMe} typeForDispatch={actionType.setAboutMe}/>
            </div>
        </div>
    )
}

export { AboutMe }