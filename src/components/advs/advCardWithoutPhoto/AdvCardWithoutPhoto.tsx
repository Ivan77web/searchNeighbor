import React, { useState } from "react";
import { IAdvCardWithoutPhoto } from "../../../types/AdvCardWithoutPhoto";
import { Arrow } from "../../icons/arrow/Arrow";
import cl from "./AdvCardWithoutPhoto.module.css"

const AdvCardWithoutPhoto: React.FC<IAdvCardWithoutPhoto> = ({ adv }) => {
    const [size, setSize] = useState<number>(0)

    if (size === 0) {
        return (
            <div className={cl.card + " " + cl.cardClose}>
                <div className={cl.data}>
                    <p className={cl.partOfData}>{adv.city}</p>

                    <p className={cl.partOfData}>{`${adv.nameValue} (${adv.myGender === "men" ? "Мужчина, " : "Женщина, "} ${adv.age} лет)`}</p>

                    <p className={cl.partOfData}>
                        {
                            adv.typeSearch === "flat"
                                ?
                                adv.numberRoomsImportant
                                    ?
                                    `Ищет: ${adv.numberRooms}-комнатную квартиру`
                                    :
                                    `Ищет: квартиру`
                                :
                                adv.typeSearch === "house"
                                    ?
                                    adv.numberRoomsImportant
                                        ?
                                        `Ищет: ${adv.numberRooms}-комнатный дом`
                                        :
                                        `Ищет: дом`
                                    :
                                    "Ищет: комнату"


                        }

                        {
                            adv.areaImportant
                                ?
                                ` (${adv.startArea}м - ${adv.endArea}м)`
                                :
                                ""
                        }
                    </p>

                    <p className={cl.partOfData}>
                        {
                            adv.peopleImportant
                                ?
                                `Количество людей: от ${adv.startPeople} до ${adv.endPeople}`
                                :
                                ""
                        }
                    </p>

                    <div className={cl.open} onClick={() => setSize(1)}>
                        <Arrow />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={cl.card + " " + cl.cardOpen}>

                <div className={cl.dataOpen}>
                    <div className={cl.dataSearcher}>
                        <p>
                            <i className={cl.helpWord}>Город: </i>
                            {adv.city}
                        </p>

                        <p>
                            <i className={cl.helpWord}>Имя: </i>
                            {adv.nameValue} ({adv.myGender === "men" ? "Мужчина" : "Женщина"}, {adv.age} лет)
                        </p>

                        <div className={cl.blockAboutMe}>
                            <i className={cl.helpWord}>О себе: </i>
                            <div className={cl.aboutMe}>{adv.aboutMe}</div>
                        </div>
                    </div>

                    <div className={cl.dataObject}>
                        <p>
                            <i className={cl.helpWord}>Ищет: </i>
                            {
                                adv.typeSearch === "flat"
                                    ?
                                    adv.numberRoomsImportant
                                        ?
                                        `${adv.numberRooms}-комнатную квартиру`
                                        :
                                        `квартиру`
                                    :
                                    adv.typeSearch === "house"
                                        ?
                                        adv.numberRoomsImportant
                                            ?
                                            `${adv.numberRooms}-комнатный дом`
                                            :
                                            `дом`
                                        :
                                        "комнату"


                            }
                        </p>

                        {
                            adv.areaImportant
                                ?
                                <p>
                                    <i className={cl.helpWord}>Площадью: </i>
                                    {`${adv.startArea}м - ${adv.endArea}м`}
                                </p>
                                :
                                ""
                        }

                        {
                            adv.peopleImportant
                                ?
                                <p>
                                    <i className={cl.helpWord}>Общее количество человек: </i>
                                    {`${adv.startPeople} - ${adv.endPeople}`}
                                </p>
                                :
                                ""
                        }

                        {
                            adv.priceImportant
                                ?
                                <p>
                                    <i className={cl.helpWord}>Цена: </i>
                                    {`${adv.startPrice} руб. - ${adv.endPrice} руб.`}
                                </p>
                                :
                                ""
                        }

                        {
                            adv.commentInSearchHouse
                                ?
                                <div className={cl.blockComment}>
                                    <i className={cl.helpWord}>Комментарий: </i>
                                    <div className={cl.comment}>{adv.commentInSearchHouse}</div>
                                </div>
                                :
                                ""
                        }
                    </div>
                </div>


                <div className={cl.open + " " + cl.openActive} onClick={() => setSize(0)}>
                    <Arrow />
                </div>
            </div>
        )
    }
}

export { AdvCardWithoutPhoto }