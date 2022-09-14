import { getStorage, getDownloadURL, ref } from "firebase/storage";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ICardAdvProps } from "../../../../../types/CardAdvWithPhotoFavorites";
import { Loader } from "../../../../ui/loader/Loader";
import cl from "./CardAdv.module.css"

const CardAdv: React.FC<ICardAdvProps> = ({ adv }) => {
    const storage = getStorage();
    const [src, setSrc] = useState<string>("")
    getDownloadURL(ref(storage, `adv_${adv.userId}_${adv.advId}_0`)).then((url) => {
        setSrc(url)
    })

    if (src) {
        return (
            <Link to={`/advs/${adv.userId}_${adv.advId}`}>
                <div className={cl.card}>
                    <img className={cl.photo} src={src} />

                    <div className={cl.data}>
                        <div className={cl.type}>
                            {
                                adv.typeObject === "flat"
                                    ?
                                    `${adv.rooms}-комнатная квартира `
                                    :
                                    adv.typeObject === "house"
                                        ?
                                        `${adv.rooms}-комнатный дом`
                                        :
                                        "Комната"
                            }
                        </div>

                        <div className={cl.price}>{adv.price + " руб."}</div>
                    </div>

                    {
                        adv.commentMyObject !== ""
                            ?
                            <div className={cl.comment}>
                                <div className={cl.helpText}>Описание: </div>

                                <div className={cl.borderComment}>
                                    {
                                        adv.commentMyObject
                                    }
                                </div>

                            </div>
                            :
                            <div/>
                    }
                </div>
            </Link>
        )
    } else {
        return (
            <Loader />
        )
    }
}

export { CardAdv }