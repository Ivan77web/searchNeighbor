import { getDownloadURL, getStorage, ref } from "@firebase/storage";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { ICardWithPhotoProps } from "../../../../types/myAdvsCardWithPhoto";
import { Loader } from "../../../ui/loader/Loader";
import cl from "./CardWithPhoto.module.css"

const CardWithPhoto: React.FC<ICardWithPhotoProps> = ({ adv }) => {
    const [src, setSrc] = useState("");
    const storage = getStorage();
    const { id } = useTypedSelector(state => state.userData)

    getDownloadURL(ref(storage, `adv_${id}_${adv.advId}_${0}`)).then((url) => {
        setSrc(url)
    })

    if (src) {
        return (
            <Link to={`/advs/${adv.userId}_${adv.advId}`}>
                <div className={cl.card}>
                    <div className={cl.photoBlock}>
                        <img className={cl.img} src={src} />
                    </div>

                    <div className={cl.data}>
                        <p>{adv.city}</p>

                        {
                            adv.typeObject === "flat"
                                ?
                                `${adv.rooms}-комнатная квартира, ${adv.area} м²`
                                :
                                adv.typeObject === "house"
                                    ?
                                    `${adv.rooms}-комнатный дом, ${adv.area} м²`
                                    :
                                    adv.typeObject === "room"
                                        ?
                                        `Комната, ${adv.area} м²`
                                        :
                                        ""
                        }

                        <p>Цена: {adv.price} руб.</p>
                    </div>
                </div>
            </Link>
        )
    } else {
        return (
            <Loader />
        )
    }
}

export { CardWithPhoto }