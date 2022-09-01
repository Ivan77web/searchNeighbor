import React, { useState } from "react";
import { MyInput } from "../../ui/myInput/MyInput";
import { MyTextarea } from "../../ui/myTextarea/MyTextarea";
import { AboutMe } from "../aboutMe/AboutMe";
import cl from "./SearchHouse.module.css"

const SearchHouse: React.FC = () => {
    const [typeSearch, setTypeSearch] = useState("flat")
    const [numberRooms, setNumberRooms] = useState("")
    const [startArea, setStartArea] = useState("")
    const [endArea, setEndArea] = useState("")
    const [startPrice, setStartPrice] = useState("")
    const [endPrice, setEndPrice] = useState("")
    const [startPeople, setStartPeople] = useState("")
    const [endPeople, setEndPeople] = useState("")
    const [comment, setComment] = useState("")

    const [areaImportant, setAreaImportant] = useState<boolean>(true)
    const [numberRoomsImportant, setNumberRoomsImportant] = useState<boolean>(true)
    const [peopleImportant, setPeopleImportant] = useState<boolean>(true)
    const [priceImportant, setPriceImportant] = useState<boolean>(true)

    const handleImportant = (state: string) => {
        if (state === "area") {
            setStartArea("")
            setEndArea("")
            setAreaImportant(!areaImportant);
        } else if (state === "rooms") {
            setNumberRooms("")
            setNumberRoomsImportant(!numberRoomsImportant);
        } else if (state === "people") {
            setStartPeople("")
            setEndPeople("")
            setPeopleImportant(!peopleImportant);
        } else if (state === "price") {
            setStartPrice("")
            setEndPrice("")
            setPriceImportant(!priceImportant);
        }
    }

    return (
        <div className={cl.searchHouse}>

            <div className={cl.aboutMe}>
                <AboutMe/>
            </div>

            <div className={cl.searchData}>
                <p className={cl.intro}>Ищу</p>

                <div className={cl.typeSearch}>
                    <div className={typeSearch === "flat" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} onClick={() => setTypeSearch("flat")}>Квартиру</div>
                    <div className={typeSearch === "room" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} onClick={() => setTypeSearch("room")}>Комнату</div>
                    <div className={typeSearch === "house" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} onClick={() => setTypeSearch("house")}>Дом</div>
                </div>

                <div>
                    <div className={cl.oneInputWithWidth}>
                        <p>Площадь</p>

                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="От, м" value={areaImportant ? startArea : "-"} setValue={setStartArea} />
                            </div>
                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="До, м" value={areaImportant ? endArea : "-"} setValue={setEndArea} />
                            </div>
                            <div
                                className={areaImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                onClick={() => handleImportant("area")}
                            >
                                Не важно
                            </div>
                        </div>
                    </div>

                    {
                        (typeSearch === "flat" || typeSearch === "house")
                            ?
                            <div className={cl.oneInputWithWidth}>
                                <p>Количество комнат</p>

                                <div className={cl.buttons}>
                                    <MyInput width="50px" height="30px" placeholder="Комнат" value={numberRoomsImportant ? numberRooms : "-"} setValue={setNumberRooms} />

                                    <div
                                        className={numberRoomsImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                        onClick={() => handleImportant("rooms")}
                                    >
                                        Не важно
                                    </div>
                                </div>

                            </div>
                            :
                            <div />
                    }

                    <div className={cl.oneInputWithWidth}>
                        <p>Общее количество человек</p>

                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="От" value={peopleImportant ? startPeople : "-"} setValue={setStartPeople} />
                            </div>
                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="До" value={peopleImportant ? endPeople : "-"} setValue={setEndPeople} />
                            </div>
                            <div
                                className={peopleImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                onClick={() => handleImportant("people")}
                            >
                                Не важно
                            </div>
                        </div>
                    </div>

                    <div className={cl.oneInputWithWidth}>
                        <p>Цена</p>

                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="От, руб" value={priceImportant ? startPrice : "-"} setValue={setStartPrice} />
                            </div>
                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="До, руб" value={priceImportant ? endPrice : "-"} setValue={setEndPrice} />
                            </div>
                            <div
                                className={priceImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                onClick={() => handleImportant("price")}
                            >
                                Не важно
                            </div>
                        </div>
                    </div>

                    <div className={cl.oneInputWithWidth}>
                        <MyTextarea width="400px" height="100px" placeholder="Комментарий" value={comment} setValue={setComment} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SearchHouse }