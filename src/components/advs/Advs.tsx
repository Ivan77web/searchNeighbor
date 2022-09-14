import React, { useContext, useState } from "react";
import cl from "./Advs.module.css"
import { Context } from "../..";
import { IAdvSearchWithPhotos } from "../../types/advs"
import { IAdvSearchWithoutPhotos } from "../../types/advs"
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ButtonsTypes } from "./buttonsTypes/ButtonsTypes";
import { FiltersAdvs } from "./filters/FiltersAdvs";
import { AdvsWithPhotos } from "./advsWithPhotos/AdvsWithPhotos";
import { AdvsWithoutPhotos } from "./advsWithoutPhotos/AdvsWithoutPhotos";
import { Loader } from "../ui/loader/Loader";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IFavorites } from "../../types/AdvPage";


const Advs: React.FC = () => {
    const { firestore } = useContext(Context);
    const {id} = useTypedSelector(state => state.userData)
    const [typeAdvs, setTypeAdvs] = useState("searchHouse")
    const [allAdvsWithPhotos] = useCollectionData<IAdvSearchWithPhotos>(
        firestore.collection("allAdvsWithPhotos")
    )
    const [allAdvsWithoutPhotos] = useCollectionData<IAdvSearchWithoutPhotos>(
        firestore.collection("allAdvsWithoutPhotos")
    )
    const [favorites, loadingFavorites] = useCollectionData<IFavorites>(
        firestore.collection(`/favorites_${id}`)
    )

    if (allAdvsWithPhotos && allAdvsWithoutPhotos && !loadingFavorites) {
        return (
            <div className={cl.advs}>
                <div className="container">

                    <ButtonsTypes typeAdvs={typeAdvs} setTypeAdvs={setTypeAdvs} />

                    <FiltersAdvs />

                    {
                        typeAdvs === "searchHouse"
                            ?
                            <AdvsWithPhotos allAdvsWithPhotos={allAdvsWithPhotos}/>
                            :
                            <AdvsWithoutPhotos allAdvsWithoutPhotos={allAdvsWithoutPhotos} favorites={favorites}/>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <Loader/>
        )
    }
}

export { Advs }