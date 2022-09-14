import React from "react";
import cl from "./AdvsWithoutPhotos.module.css"
import { AdvCardWithoutPhoto } from "../advCardWithoutPhoto/AdvCardWithoutPhoto";
import { IAdvsWithoutPhotosProps } from "../../../types/AdvsWithoutPhotos";

const AdvsWithoutPhotos: React.FC<IAdvsWithoutPhotosProps> = ({allAdvsWithoutPhotos, favorites}) => {
    return(
        <div className={cl.advs}>
            {
                allAdvsWithoutPhotos.map( adv => 
                    <AdvCardWithoutPhoto key={adv.userId + "_" + adv.advId} adv={adv} favorites={favorites}/>    
                )
            }
        </div>
    )
}

export {AdvsWithoutPhotos}