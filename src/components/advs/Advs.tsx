import React, { useContext, useState } from "react";
import cl from "./Advs.module.css"
import { Context } from "../..";
import { IAdv } from "../../types/advs";
import { AdvCard } from "../advCard/AdvCard";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { ButtonsTypes } from "./buttonsTypes/ButtonsTypes";
import { FiltersAdvs } from "./filters/FiltersAdvs";


const Advs: React.FC = () => {
    const { firestore } = useContext(Context);
    const [typeAdvs, setTypeAdvs] = useState("searchHouse")
    const [allAdvs, loading] = useCollectionData<IAdv>(
        firestore.collection("allAdvs")
    )

    if (loading) {
        return (
            <div>LOADING</div>
        )
    } else {
        return (
            <div className={cl.advs}>
                <div className="container">

                    <ButtonsTypes typeAdvs={typeAdvs} setTypeAdvs={setTypeAdvs}/>

                    <FiltersAdvs/>

                    {
                        typeAdvs === "searchHouse"
                        ?
                        <div>Карточки с фотками</div>
                        : 
                        <div>Карточки без фоток</div>
                    }

                    {/* {
                        allAdvs?.map(adv =>
                            <AdvCard key={adv.idOwner + adv.advId} adv={adv} />
                        )
                    } */}
                </div>
            </div>
        )
    }
}

export { Advs }