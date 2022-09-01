import { setDoc, doc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

import React, { useContext, useState } from "react";
import { Context } from "../..";
import cl from "./AddAdv.module.css"
import { SearchNeighbor } from "./searchNeighbor/SearchNeighbor";
import { SearchHouse } from "./searchHouse/SearchHouse";
import { MyButton } from "../ui/myButton/MyButton";

const AddAdv: React.FC = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth)



    const [typeAdv, setTypeAdv] = useState<string>("searchNeighbor")

    const handleType = (type: string) => {
        setTypeAdv(type)
    }

   
    // const addAdv = async () => {
    //     if (user) {
    //         const advId = Date.now()

    //         // await setDoc(doc(firestore.collection("allAdvs").doc(`advs_${user.uid}`), `adv${advId}`, "adv"), {
    //         //     advId: advId,
    //         //     idOwner: user.uid,
    //         //     title: title,
    //         //     body: body,
    //         //     price: price,
    //         // });

    //         await setDoc(doc(firestore, "allAdvs", `adv_${user.uid}_${advId}`), {
    //             advId: advId,
    //             idOwner: user.uid,
    //             title: title,
    //             body: body,
    //             price: price,
    //         });

    //     }
    // }

    return (
        <div className={cl.addAdv}>
            <div className="container">

                <div className={cl.typeAdv}>
                    <div 
                        className={typeAdv === "searchNeighbor" ? cl.searchNeighbor + " " + cl.active: cl.searchNeighbor}
                        onClick={() => handleType("searchNeighbor")}
                    >
                        Ищу соседа
                    </div>

                    <div 
                        className={typeAdv === "searchNeighbor" ? cl.searchHouse: cl.active + " " + cl.searchHouse}
                        onClick={() => handleType("searchHouse")}
                    >
                        Ищу квартиру для подслеления
                    </div>
                </div>

                <div className={cl.data}>
                    {
                        typeAdv === "searchNeighbor"
                        ?
                        <SearchNeighbor/>
                        :
                        <SearchHouse/>
                    }
                </div>

                <div className={cl.buttonAdd}>
                    <MyButton width="100%" height="60px" bg="rgb(133, 33, 26)" color="white" name="Опубликовать"/>
                </div>

            </div>
        </div>
    )
}

export { AddAdv }