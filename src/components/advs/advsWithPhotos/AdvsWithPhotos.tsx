import React from "react";
import { IAdvsWithPhotoProps } from "../../../types/AdvsWithPhotos";
import { AdvCardWithPhoto } from "../advCardWithPhoto/AdvCardWithPhoto";
import cl from "./AdvsWithPhotos.module.css"

const AdvsWithPhotos: React.FC<IAdvsWithPhotoProps> = ({allAdvsWithPhotos}) => {
    return(
        <div className={cl.advs}>
            {
                allAdvsWithPhotos.map( adv => 
                    <AdvCardWithPhoto key={adv.userId + "_" + adv.advId} adv={adv}/>    
                )
            }
        </div>
    )
}

export {AdvsWithPhotos}