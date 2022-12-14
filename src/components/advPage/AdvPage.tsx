import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../..";
import { IAdvSearchWithPhotos } from "../../types/advs";
import { useCollectionData } from "react-firebase-hooks/firestore";
import cl from "./AdvPage.module.css"
import { PhotoBlock } from "./photoBlock/PhotoBlock";
import { MyButton } from "../ui/myButton/MyButton";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { setDoc, doc, deleteDoc } from "firebase/firestore";
import { Loader } from "../ui/loader/Loader";
import { IFavorites } from "../../types/AdvPage";

const AdvPage: React.FC = () => {
    const { firestore } = useContext(Context);
    const { article } = useParams<string>();
    const { id } = useTypedSelector(state => state.userData)
    const [advData, setAdvData] = useState<IAdvSearchWithPhotos>()
    const [advs] = useCollectionData<IAdvSearchWithPhotos>(
        firestore.collection(`/allAdvsWithPhotos`)
    )
    const [favorites, loadingFavorites] = useCollectionData<IFavorites>(
        firestore.collection(`/favorites_${id}`)
    )
    const [visibilityPhone, setVisibilityPhone] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState(false)

    const addInFavorites = async () => {
        await setDoc(doc(firestore, `favorites_${id}`, `adv_${advData?.advId}`), {
            advId: advData?.advId
        });
    }

    const deleteFavorites = async () => {
        await deleteDoc(doc(firestore, `favorites_${id}`, `adv_${advData?.advId}`));
        setIsFavorite(false)
    }

    useEffect(() => {
        if (advs && article) {
            advs.map(adv => {
                if (adv.userId === article.split("_")[0] && adv.advId === Number(article.split("_")[1])) {
                    setAdvData(adv);
                }
            })
        }
    }, [advs, article])

    useEffect(() => {
        if (!loadingFavorites && advData) {
            favorites?.map(adv => {
                if (adv.advId === advData?.advId) {
                    setIsFavorite(true);
                }
            })
        }
    }, [favorites, advData])

    if (advData && !loadingFavorites) {
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
                                        {advData.typeObject === "flat" ? "????????????????, " : advData.typeObject === "house" ? "??????, " : "??????????????, "}
                                        {advData.area + " ????"}
                                    </h1>
                                    <p className={cl.helpText}>{advData.city}</p>
                                </div>

                                <div className={cl.buttons}>
                                    <div className={cl.favorites} onClick={isFavorite === false ? addInFavorites : deleteFavorites}>
                                        <MyButton 
                                            width="120px" 
                                            height="30px" 
                                            color="white" 
                                            bg={isFavorite ? "rgb(47, 94, 53)" : "rgb(145, 35, 35)"} 
                                            name={isFavorite ? "??????????????????" : "?? ??????????????????"} 
                                        />
                                    </div>

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
                                                    "???????????????? ??????????"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={cl.dataObject}>
                                <p className={cl.helpText}>
                                    <i>???????????????????? ?? {advData.typeObject === "flat" ? "????????????????: " : advData.typeObject === "house" ? "????????: " : "??????????????: "}</i>
                                </p>

                                {
                                    advData.typeObject !== "room"
                                        ?
                                        <div className={cl.oneData}>
                                            <p className={cl.helpText}>
                                                ???????????????????? ????????????:
                                            </p>
                                            <p>&nbsp; {advData.rooms}</p>
                                        </div>
                                        :
                                        ""
                                }

                                <div className={cl.oneData}>
                                    <p className={cl.helpText}>?????? ??????????????????:</p>
                                    <p>&nbsp; {advData.year}</p>
                                </div>

                                <div className={cl.requirements}>
                                    <div className={cl.oneRequirements}>{advData.children ? "?????????? ?? ????????????" : "?????? ??????????"}</div>
                                    <div className={cl.oneRequirements}>{advData.animals ? "?????????? ?? ??????????????????" : "?????? ????????????????"}</div>
                                    <div className={cl.oneRequirements}>{advData.badHabits ? "?????????? ?? ???????????????? ????????????????????" : "?????? ?????????????? ????????????????"}</div>
                                </div>

                                <div className={cl.comment}>
                                    <p className={cl.introHelp}>
                                        ?? {advData.typeObject === "flat" ? "????????????????: " : advData.typeObject === "house" ? "????????: " : "??????????????: "}
                                    </p>

                                    <div className={cl.textArea}>{advData.commentMyObject}</div>
                                </div>
                            </div>

                            <div className={cl.dataObject}>
                                <p className={cl.helpText}><i>???????????????????? ?? ??????????????????:</i></p>

                                <div className={cl.oneData}>
                                    <p className={cl.helpText}>????????????????:</p>
                                    <p>&nbsp; {advData.nameValue} ({advData.myGender === "men" ? "??????????????" : "??????????????"}, {advData.age})</p>
                                </div>

                                <div className={cl.comment}>
                                    <p className={cl.introHelpAboutMe}>?? ????????: </p>

                                    <div className={cl.textAreaAboutMe}>{advData.aboutMe}</div>
                                </div>
                            </div>

                            <div className={cl.dataObject}>
                                <div className={cl.oneData}>
                                    <p className={cl.helpText}>??????:</p>
                                    <p>
                                        &nbsp;
                                        ???????????? (
                                        {advData.myGender === "men" ? "??????????????" : advData.myGender === "women" ? "??????????????" : "?????? ???? ??????????"}
                                        {advData.ageImportant ? ", " + advData.searchAgeStart + " - " + advData.searchAgeEnd + " ??????" : ""}
                                        )
                                    </p>
                                </div>

                                <div className={cl.comment}>
                                    <p className={cl.introHelpForNeighbor}>??????????????????????: </p>

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
            <Loader />
        )
    }
}

export { AdvPage }
