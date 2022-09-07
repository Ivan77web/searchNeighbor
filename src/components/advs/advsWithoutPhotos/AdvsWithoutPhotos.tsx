import React from "react";
import cl from "./AdvsWithoutPhotos.module.css"
import { IAdvSearchWithoutPhotos } from "../../../types/advs"
import { AdvCardWithoutPhoto } from "../advCardWithoutPhoto/AdvCardWithoutPhoto";
import { IAdvsWithoutPhotosProps } from "../../../types/AdvsWithoutPhotos";

const AdvsWithoutPhotos: React.FC<IAdvsWithoutPhotosProps> = ({allAdvsWithoutPhotos}) => {
    return(
        <div className={cl.advs}>
            {
                allAdvsWithoutPhotos.map( adv => 
                    <AdvCardWithoutPhoto key={adv.userId + "_" + adv.advId} adv={adv}/>    
                )
            }
        </div>
    )
}

export {AdvsWithoutPhotos}