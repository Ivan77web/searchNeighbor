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


const Advs: React.FC = () => {
    const { firestore } = useContext(Context);
    const [typeAdvs, setTypeAdvs] = useState("searchHouse")
    const [allAdvsWithPhotos, loading_one] = useCollectionData<IAdvSearchWithPhotos>(
        firestore.collection("allAdvsWithPhotos")
    )
    const [allAdvsWithoutPhotos, loading_two] = useCollectionData<IAdvSearchWithoutPhotos>(
        firestore.collection("allAdvsWithoutPhotos")
    )

    if (allAdvsWithPhotos && allAdvsWithoutPhotos) {
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
                            <AdvsWithoutPhotos allAdvsWithoutPhotos={allAdvsWithoutPhotos} />
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>LOADING</div>
        )
    }
}

export { Advs }