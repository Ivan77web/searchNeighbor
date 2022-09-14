import React, { useState } from "react";
import { ICardWithoutPhoto } from "../../../../types/myAdvsCardWithoutPhoto";
import { MyButton } from "../../../ui/myButton/MyButton";
import cl from "./CardWithoutPhoto.module.css"

const CardWithoutPhoto: React.FC<ICardWithoutPhoto> = ({ adv }) => {
    const [visibilityPhone, setVisibilityPhone] = useState<boolean>(false)
    
    return (
        <div className={cl.card}>
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

                <div className={cl.buttons}>
                    <div className={cl.phone}
                        onClick={
                            visibilityPhone
                                ?
                                () => { }
                                :
                                () => setVisibilityPhone(true)
                        }
                    >
                        <MyButton
                            width="100px"
                            height="30px"
                            color="white"
                            bg="grey"
                            name={
                                visibilityPhone
                                    ?
                                    adv.phoneValue
                                    :
                                    "Телефон"
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CardWithoutPhoto }