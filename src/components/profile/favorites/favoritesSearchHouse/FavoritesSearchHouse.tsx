import React, { useEffect, useState } from "react";
import cl from "./FavoritesSearchHouse.module.css"
import { IFavoritesSearchHouseProps } from "../../../../types/favoritesSearchHouse";
import { IAdvSearchWithPhotos } from "../../../../types/advs";
import { CardAdv } from "./cardAdv/CardAdv";

const FavoritesSearchHouse: React.FC<IFavoritesSearchHouseProps> = ({ myFavorites, allAdvs }) => {
    const [rightAdvs, setRightAdvs] = useState<IAdvSearchWithPhotos[]>([])

    useEffect(() => {
        let arrAdvs: IAdvSearchWithPhotos[] = [];

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
                    <CardAdv key={adv.advId} adv={adv} />
                )
            }
        </div>
    )
}

export { FavoritesSearchHouse }