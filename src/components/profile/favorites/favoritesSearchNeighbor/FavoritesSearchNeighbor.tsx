import React, { useEffect, useState } from "react";
import cl from "./FavoritesSearchNeighbor.module.css"
import { IAdvSearchWithoutPhotos } from "../../../../types/advs";
import { IFavoritesSearchNeighborProps } from "../../../../types/favoritesSearchNeighbor";
import { AdvCardWithoutPhoto } from "../../../advs/advCardWithoutPhoto/AdvCardWithoutPhoto";

const FavoritesSearchNeighbor: React.FC<IFavoritesSearchNeighborProps> = ({ allAdvs, myFavorites }) => {
    const [rightAdvs, setRightAdvs] = useState<IAdvSearchWithoutPhotos[]>([])

    useEffect(() => {
        let arrAdvs: IAdvSearchWithoutPhotos[] = [];

        myFavorites.map(id => {
            allAdvs.map(adv => {
                if (id.advId === adv.advId) {
                    arrAdvs.push(adv)
                }
            })
        })

        setRightAdvs(arrAdvs)
    }, [])

    return (
        <div className={cl.favorites}>
            {
                rightAdvs.map(adv =>
                    <AdvCardWithoutPhoto adv={adv} favorites={myFavorites}/>
                )
            }
        </div>
    )
}

export { FavoritesSearchNeighbor }