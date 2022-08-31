import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../..";
import { IAdv } from "../../types/advs";

import { useCollectionData } from "react-firebase-hooks/firestore";

const AdvPage: React.FC = () => {
    const { firestore } = useContext(Context);
    const { article } = useParams<string>();
    const [advData, setAdvData] = useState<IAdv>()

    const [advs] = useCollectionData<IAdv>(
        firestore.collection(`/allAdvs`)
    )

    useEffect( () => {
        if(advs && article){
            advs.map( adv => {
                if(adv.idOwner === article.split("_")[0] && adv.advId === Number(article.split("_")[1])  ){
                    setAdvData(adv);
                }
            })
        }
    }, [advs])

    if(advData){
        return (
            <div>
                <h1>{advData.title}</h1>
                <h3>{advData.body}</h3>
                <p>{advData.price}</p>
                <button> Откликнуться </button>
            </div>
        )
    } else {
        return(
            <div/>
        )
    }
}

export { AdvPage }
