import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { AboutMe } from "../../aboutMe/AboutMe";
import { actionType } from "../../../../types/advDataReducer"
import cl from "./DataPeople.module.css"
import { MyInputRedux } from "../../../ui/myInputRedux/MyInputRedux";
import { MyTextareaRedux } from "../../../ui/myTextareaRedux/MyTextareaRedux";

const DataPeople: React.FC = () => {
    const dispatch = useDispatch();
    const {
        genderNeighbor,
        searchAgeStart,
        searchAgeEnd,
        ageImportant,
        animals,
        children,
        badHabits,
        commentInSearchNeighbor
    } = useTypedSelector(state => state.advData)

    const handleImportant = (state: string) => {
        if (state === "age") {
            dispatch({ type: actionType.setSearchAgeStart, payload: "" })
            dispatch({ type: actionType.setSearchAgeEnd, payload: "" })
            dispatch({ type: actionType.setAgeImportant, payload: !ageImportant })
        }
    }

    return (
        <div className={cl.dataPeople}>

            <div className={cl.aboutMe}>
                <AboutMe />
            </div>

            <div className={cl.searchData}>
                <p className={cl.intro}>Кого Вы ищете?</p>

                <div className={cl.choiceGender}>
                    <div 
                        className={genderNeighbor === "men" ? cl.men + " " + cl.active : cl.men} 
                        onClick={() => dispatch({ type: actionType.setGenderNeighbor, payload: "men" })}
                    >
                        Мужской
                    </div>

                    <div 
                        className={genderNeighbor === "women" ? cl.women + " " + cl.active : cl.women}
                        onClick={() => dispatch({ type: actionType.setGenderNeighbor, payload: "women" })}
                    >
                        Женский
                    </div>

                    <div 
                        className={genderNeighbor === "anyGender" ? cl.anyGender + " " + cl.active : cl.anyGender} 
                        onClick={() => dispatch({ type: actionType.setGenderNeighbor, payload: "anyGender" })}
                    >
                        Не важно
                    </div>
                </div>

                <div className={cl.oneInputWithWidth}>
                    <p>Возраст</p>

                    <div className={cl.buttons}>
                        <div className={cl.oneButton}>
                            <MyInputRedux 
                                width="100px" 
                                height="30px" 
                                placeholder="От" 
                                value={ageImportant ? searchAgeStart : "-"} 
                                typeForDispatch={actionType.setSearchAgeStart} 
                            />
                        </div>

                        <div className={cl.oneButton}>
                            <MyInputRedux 
                                width="100px" 
                                height="30px" 
                                placeholder="До" 
                                value={ageImportant ? searchAgeEnd : "-"} 
                                typeForDispatch={actionType.setSearchAgeEnd} 
                            />
                        </div>

                        <div
                            className={ageImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                            onClick={() => handleImportant("age")}
                        >
                            Не важно
                        </div>
                    </div>
                </div>

                <div className={cl.checkBoxes}>
                    <div className={cl.oneCheckBox}>
                        <input 
                            className={cl.checkBox} 
                            type="checkBox" 
                            checked={animals} 
                            onChange={() => dispatch({ type: actionType.setAnimals, payload: !animals })} 
                        />

                        <p>С животными</p>
                    </div>

                    <div className={cl.oneCheckBox}>
                        <input 
                            className={cl.checkBox} 
                            type="checkBox" 
                            checked={children} 
                            onChange={() => dispatch({ type: actionType.setChildren, payload: !children })} 
                        />

                        <p>С детьми</p>
                    </div>

                    <div className={cl.oneCheckBox}>
                        <input 
                            className={cl.checkBox} 
                            type="checkBox" 
                            checked={!badHabits} 
                            onChange={() => dispatch({ type: actionType.setBadHabits, payload: !badHabits })} 
                        />

                        <p>Без вредных привычек</p>
                    </div>
                </div>

                <div className={cl.oneInputWithWidth}>
                    <MyTextareaRedux 
                        width="400px" 
                        height="100px" 
                        placeholder="Комментарий" 
                        value={commentInSearchNeighbor} 
                        typeForDispatch={actionType.setCommentInSearchNeighbor} 
                    />
                </div>

            </div>
        </div>
    )
}

export { DataPeople }