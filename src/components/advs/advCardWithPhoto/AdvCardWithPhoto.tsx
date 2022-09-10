import React, { useState } from "react";
import cl from "./AdvCardWithPhoto.module.css"
import { IAdvCardWithPhotoProps } from "../../../types/AdvCardWithPhoto";
import { PhotoBlock } from "./photoBlock/PhotoBlock";
import { Link } from "react-router-dom";

const AdvCardWithPhoto: React.FC<IAdvCardWithPhotoProps> = ({ adv }) => {
    const [activePhoto, setActivePhoto] = useState<number>(0)

    return (
        <div className={cl.card}>
            <PhotoBlock adv={adv} activePhoto={activePhoto} setActivePhoto={setActivePhoto} />

            <Link to={`/advs/${adv.userId}_${adv.advId}`}>
                <div className={cl.data}>
                    <p>Город: {adv.city}</p>

                    {
                        adv.typeObject === "flat"
                            ?
                            `${adv.rooms}-комнатная квартира, ${adv.area} м²`
                            :
                            adv.typeObject === "house"
                                ?
                                `${adv.rooms}-комнатный дом, ${adv.area} м²`
                                :
                                adv.typeObject === "room"
                                    ?
                                    `Комната, ${adv.area} м²`
                                    :
                                    ""
                    }

                    <p>Владелец: {adv.myGender === "men" ? "Мужчина" : "Женщина"}, {adv.age} лет</p>

                    <p>
                        Ищет соседа:
                        {
                            adv.genderNeighbor !== "anyGender"
                                ?
                                adv.genderNeighbor === "men"
                                    ?
                                    " Мужчину"
                                    :
                                    " Женщину"
                                :
                                " Пол не важен"
                        },

                        {
                            adv.ageImportant
                                ?
                                ` ${adv.searchAgeStart} - ${adv.searchAgeEnd} лет`
                                :
                                " возраст не важен"
                        }
                    </p>

                    <p>{adv.badHabits ? "" : "Без вредных привычек"}</p>
                    <p>{adv.children ? "" : "Без детей"}</p>
                    <p>{adv.animals ? "" : "Без животных"}</p>

                    <p>Цена: {adv.price} руб.</p>
                </div>
            </Link>
        </div>
    )
}

export { AdvCardWithPhoto }