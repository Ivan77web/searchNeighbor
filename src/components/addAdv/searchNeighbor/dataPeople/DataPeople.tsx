import React, { useState } from "react";
import { MyInput } from "../../../ui/myInput/MyInput";
import { MyTextarea } from "../../../ui/myTextarea/MyTextarea";
import { AboutMe } from "../../aboutMe/AboutMe";
import cl from "./DataPeople.module.css"

const DataPeople: React.FC = () => {
    const [gender, setGender] = useState("men")
    const [searchAgeStart, setSearchAgeStart] = useState("")
    const [searchAgeEnd, setSearchAgeEnd] = useState("")
    const [ageImportant, setAgeImportant] = useState<boolean>(true)
    const [animals, setAnimals] = useState(false)
    const [children, setChildren] = useState(false)
    const [badHabits, setBadHabits] = useState(false)
    const [comment, setComment] = useState("")

    const handleImportant = (state: string) => {
        if (state === "age") {
            setSearchAgeStart("")
            setSearchAgeEnd("")
            setAgeImportant(!ageImportant);
        }
    }

    return(
        <div className={cl.dataPeople}>

            <div className={cl.aboutMe}>
                <AboutMe />
            </div>

            <div className={cl.searchData}>
                <p className={cl.intro}>Кого Вы ищете?</p>

                <div className={cl.choiceGender}>
                    <div className={gender === "men" ? cl.men + " " + cl.active : cl.men} onClick={() => setGender("men")}>Мужской</div>
                    <div className={gender === "women" ? cl.women + " " + cl.active : cl.women} onClick={() => setGender("women")}>Женский</div>
                    <div className={gender === "anyGender" ? cl.anyGender + " " + cl.active : cl.anyGender} onClick={() => setGender("anyGender")}>Не важно</div>
                </div>

                <div className={cl.oneInputWithWidth}>
                    <p>Возраст</p>
                    <div className={cl.buttons}>
                        <div className={cl.oneButton}>
                            <MyInput width="100px" height="30px" placeholder="От" value={ageImportant ? searchAgeStart : "-"} setValue={setSearchAgeStart} />
                        </div>
                        <div className={cl.oneButton}>
                            <MyInput width="100px" height="30px" placeholder="До" value={ageImportant ? searchAgeEnd : "-"} setValue={setSearchAgeEnd} />
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
                        <input className={cl.checkBox} type="checkBox" checked={animals} onChange={() => setAnimals(!animals)}/> 
                        <p>С животными</p>
                    </div>

                    <div className={cl.oneCheckBox}>
                    <input className={cl.checkBox} type="checkBox" checked={children} onChange={() => setChildren(!children)}/> 
                        <p>С детьми</p>
                    </div>

                    <div className={cl.oneCheckBox}>
                    <input className={cl.checkBox} type="checkBox" checked={!badHabits} onChange={() => setBadHabits(!badHabits)}/> 
                        <p>Без вредных привычек</p>
                    </div>   
                </div>

                <div className={cl.oneInputWithWidth}>
                        <MyTextarea width="400px" height="100px" placeholder="Комментарий" value={comment} setValue={setComment} />
                </div>

            </div>
        </div>
    )
}

export {DataPeople}