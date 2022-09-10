import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../..";
import { IAdv, IAdvSearchWithPhotos } from "../../types/advs";
import { useCollectionData } from "react-firebase-hooks/firestore";
import cl from "./AdvPage.module.css"
import { PhotoBlock } from "./photoBlock/PhotoBlock";
import { MyButton } from "../ui/myButton/MyButton";

const AdvPage: React.FC = () => {
    const { firestore } = useContext(Context);
    const { article } = useParams<string>();
    const [advData, setAdvData] = useState<IAdvSearchWithPhotos>()
    const [advs] = useCollectionData<IAdvSearchWithPhotos>(
        firestore.collection(`/allAdvsWithPhotos`)
    )
    const [visibilityPhone, setVisibilityPhone] = useState<boolean>(false);

    useEffect(() => {
        if (advs && article) {
            advs.map(adv => {
                if (adv.userId === article.split("_")[0] && adv.advId === Number(article.split("_")[1])) {
                    setAdvData(adv);
                }
            })
        }
    }, [advs, article])

    if (advData) {
        return (
            <div className={cl.page}>
                <div className="container">
                    <div className={cl.data}>
                        <div className={cl.photos}>
                            <PhotoBlock number={advData.numberOfPhotos} advId={advData.advId} userId={advData.userId} />
                        </div>

                        <div className={cl.blockData}>
                            <div className={cl.intro}>
                                <div className={cl.mainText}>
                                    <h1 className={cl.introText}>
                                        {advData.typeObject === "flat" ? "Квартира, " : advData.typeObject === "house" ? "Дом, " : "Комната, "}
                                        {advData.area + " м²"}
                                    </h1>
                                    <p className={cl.helpText}>{advData.city}</p>
                                </div>

                                <div className={cl.buttons}>
                                    <div className={cl.favorites}><MyButton width="120px" height="30px" color="white" bg="green" name="В избранное NOT WORK" /></div>

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
                                            width="120px"
                                            height="30px"
                                            color="white"
                                            bg="grey"
                                            name={
                                                visibilityPhone
                                                    ?
                                                    advData.phoneValue
                                                    :
                                                    "Показать номер"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={cl.dataObject}>
                                <p className={cl.helpText}>
                                    <i>Информация о {advData.typeObject === "flat" ? "квартире: " : advData.typeObject === "house" ? "доме: " : "комнате: "}</i>
                                </p>

                                {
                                    advData.typeObject !== "room"
                                        ?
                                        <div className={cl.oneData}>
                                            <p className={cl.helpText}>
                                                Количество комнат:
                                            </p>
                                            <p>&nbsp; {advData.rooms}</p>
                                        </div>
                                        :
                                        ""
                                }

                                <div className={cl.oneData}>
                                    <p className={cl.helpText}>Год постройки:</p>
                                    <p>&nbsp; {advData.year}</p>
                                </div>

                                <div className={cl.requirements}>
                                    <div className={cl.oneRequirements}>{advData.children ? "Можно с детьми" : "Без детей"}</div>
                                    <div className={cl.oneRequirements}>{advData.animals ? "Можно с животными" : "Без животных"}</div>
                                    <div className={cl.oneRequirements}>{advData.badHabits ? "Можно с вредными привычками" : "Без вредных привычек"}</div>
                                </div>

                                <div className={cl.comment}>
                                    <p className={cl.introHelp}>
                                        О {advData.typeObject === "flat" ? "квартире: " : advData.typeObject === "house" ? "доме: " : "комнате: "}
                                    </p>

                                    <div className={cl.textArea}>{advData.commentMyObject}</div>
                                </div>
                            </div>

                            <div className={cl.dataObject}>
                                <p className={cl.helpText}><i>Информация о владельце:</i></p>

                                <div className={cl.oneData}>
                                    <p className={cl.helpText}>Владелец:</p>
                                    <p>&nbsp; {advData.nameValue} ({advData.myGender === "men" ? "Мужчина" : "Женщина"}, {advData.age})</p>
                                </div>

                                <div className={cl.comment}>
                                    <p className={cl.introHelpAboutMe}>О себе: </p>

                                    <div className={cl.textAreaAboutMe}>{advData.aboutMe}</div>
                                </div>
                            </div>

                            <div className={cl.dataObject}>
                                <div className={cl.oneData}>
                                    <p className={cl.helpText}>Ищу:</p>
                                    <p>
                                        &nbsp;
                                        соседа (
                                        {advData.myGender === "men" ? "Мужчину" : advData.myGender === "women" ? "Женщину" : "Пол не важен"}
                                        {advData.ageImportant ? ", " + advData.searchAgeStart + " - " + advData.searchAgeEnd + " лет" : ""}
                                        )
                                    </p>
                                </div>

                                <div className={cl.comment}>
                                    <p className={cl.introHelpForNeighbor}>Комментарий: </p>

                                    <div className={cl.textAreaForNeighbor}>{advData.commentInSearchNeighbor}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div />
        )
    }
}

export { AdvPage }
