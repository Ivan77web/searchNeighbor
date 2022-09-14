import React, { useContext, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Context } from "../../..";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IAdvSearchWithoutPhotos, IAdvSearchWithPhotos } from "../../../types/advs";
import { IMyFavorites } from "../../../types/favorites";
import { Loader } from "../../ui/loader/Loader";
import cl from "./Favorites.module.css"
import { FavoritesSearchHouse } from "./favoritesSearchHouse/FavoritesSearchHouse";
import { FavoritesSearchNeighbor } from "./favoritesSearchNeighbor/FavoritesSearchNeighbor";

const Favorites: React.FC = () => {
    const { firestore } = useContext(Context);
    const { id } = useTypedSelector(state => state.userData)
    const [typeFavorites, setTypeFavorites] = useState("searchObject");
    const [myFavorites] = useCollectionData<IMyFavorites>(
        firestore.collection(`favorites_${id}`)
    )
    const [allAdvsWithPhoto] = useCollectionData<IAdvSearchWithPhotos>(
        firestore.collection(`allAdvsWithPhotos`)
    )
    const [allAdvsWithoutPhoto] = useCollectionData<IAdvSearchWithoutPhotos>(
        firestore.collection(`allAdvsWithoutPhotos`)
    )

    if(myFavorites && allAdvsWithPhoto && allAdvsWithoutPhoto){
        return (
            <div className={cl.favorites}>
                <h3 className={cl.title}>Избранное</h3>
    
                <div className={cl.buttons}>
                    <div
                        className={typeFavorites === "searchObject"
                            ?
                            cl.button + " " + cl.buttonObject + " " + cl.activeButton
                            :
                            cl.button + " " + cl.buttonObject}
                        onClick={() => setTypeFavorites("searchObject")}
                    >
                        Поиск объекта
                    </div>
    
                    <div
                        className={typeFavorites === "searchNeighbor"
                            ?
                            cl.button + " " + cl.buttonNeighbor + " " + cl.activeButton
                            :
                            cl.button + " " + cl.buttonNeighbor}
    
                        onClick={() => setTypeFavorites("searchNeighbor")}
                    >
                        Поиск соседа
                    </div>
                </div>
    
                {
                    typeFavorites === "searchObject"
                        ?
                        <FavoritesSearchHouse myFavorites={myFavorites} allAdvs={allAdvsWithPhoto} />
                        :
                        <FavoritesSearchNeighbor myFavorites={myFavorites} allAdvs={allAdvsWithoutPhoto} />
                }
            </div>
        )
    } else{
        return(
            <Loader/>
        )
    }
}

export { Favorites }