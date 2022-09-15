import React, { useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "../../..";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IAdvSearchWithoutPhotos, IAdvSearchWithPhotos } from "../../../types/advs";
import { Loader } from "../../ui/loader/Loader";
import { CardWithoutPhoto } from "./cardWithoutPhoto/CardWithoutPhoto";
import { CardWithPhoto } from "./cardWithPhoto/CardWithPhoto";
import cl from "./MyAdvs.module.css"

const MyAdvs: React.FC = () => {
    const [typeAdv, setTypeAdv] = useState("");
    const { id } = useTypedSelector(state => state.userData);
    const { firestore } = useContext(Context);
    const [myAdvsWithPhotos, loadingWithPhotos] = useCollectionData<IAdvSearchWithPhotos>(
        firestore.collection(`privateAdv_${id}_withPhotos`)
    )
    const [myAdvsWithoutPhotos, loadingWithoutPhotos] = useCollectionData<IAdvSearchWithoutPhotos>(
        firestore.collection(`privateAdv_${id}_withoutPhotos`)
    )

    if (!loadingWithPhotos && !loadingWithoutPhotos) {
        return (
            <div className={cl.MyAdvs}>
                <h3 className={cl.intro}>Мои объявления</h3>

                <div className={cl.typeAdv}>
                    <div
                        className={typeAdv === "searchNeighbor" ? cl.searchHouse : cl.active + " " + cl.searchHouse}
                        onClick={() => setTypeAdv("searchHouse")}
                    >
                        Ищу квартиру для подслеления
                    </div>

                    <div
                        className={typeAdv === "searchNeighbor" ? cl.searchNeighbor + " " + cl.active : cl.searchNeighbor}
                        onClick={() => setTypeAdv("searchNeighbor")}
                    >
                        Ищу соседа
                    </div>

                    {
                        typeAdv === "searchNeighbor"
                            ?
                            <div className={cl.advs}>
                                {
                                    myAdvsWithPhotos
                                        ?
                                        myAdvsWithPhotos.map(adv =>
                                            <CardWithPhoto key={adv.advId} adv={adv} />
                                        )
                                        :
                                        <div />
                                }
                            </div>
                            :
                            <div className={cl.advs}>
                                {
                                    myAdvsWithoutPhotos
                                        ?
                                        myAdvsWithoutPhotos.map(adv =>
                                            <CardWithoutPhoto key={adv.advId} adv={adv} />
                                        )
                                        :
                                        <div />
                                }
                            </div>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <Loader />
        )
    }
}

export { MyAdvs }