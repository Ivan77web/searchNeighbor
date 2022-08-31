import { setDoc, doc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

import React, { useContext, useState } from "react";
import { Context } from "../..";
import cl from "./AddAdv.module.css"
import { SearchNeighbor } from "./searchNeighbor/SearchNeighbor";
import { SearchHouse } from "./searchHouse/SearchHouse";

const AddAdv: React.FC = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [price, setPrice] = useState("")
    const [typeAdv, setTypeAdv] = useState<string>("searchNeighbor")

    const handleType = (type: string) => {
        setTypeAdv(type)
    }

    const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value)
    }

    const handleBody: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setBody(e.target.value)
    }

    const handlePrice: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setPrice(e.target.value)
    }

    const addAdv = async () => {
        if (user) {
            const advId = Date.now()

            // await setDoc(doc(firestore.collection("allAdvs").doc(`advs_${user.uid}`), `adv${advId}`, "adv"), {
            //     advId: advId,
            //     idOwner: user.uid,
            //     title: title,
            //     body: body,
            //     price: price,
            // });

            await setDoc(doc(firestore, "allAdvs", `adv_${user.uid}_${advId}`), {
                advId: advId,
                idOwner: user.uid,
                title: title,
                body: body,
                price: price,
            });

            // await setDoc(doc(firestore, "allAdvs_data", `adv_${user.uid}_${advId}`), {
            //     userId: user.uid,
            //     advId: advId
            // });

            setTitle("")
            setBody("")
            setPrice("")
        }
    }

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

                <button onClick={addAdv}>Опубликовать</button>




                {/* ТУТ БУДЕТ ДОБАВЛЯТЬСЯ ОБЪЯВЛЕНИЕ

                <div>
                    <input value={title} onChange={handleTitle} placeholder="Название" />
                    <input value={body} onChange={handleBody} placeholder="Описание" />
                    <input value={price} onChange={handlePrice} placeholder="Цена" />

                    <button onClick={addAdv}>Опубликовать</button>
                </div> */}
            </div>
        </div>
    )
}

export { AddAdv }