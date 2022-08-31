import React, { useContext } from "react";
import cl from "./Advs.module.css"
import { Context } from "../..";
import { IAdv } from "../../types/advs";
import { AdvCard } from "../advCard/AdvCard";

import { useCollectionData } from "react-firebase-hooks/firestore";


const Advs: React.FC = () => {
    const { firestore } = useContext(Context);
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
                    {
                        allAdvs?.map(adv =>
                            <AdvCard key={adv.idOwner + adv.advId} adv={adv} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export { Advs }