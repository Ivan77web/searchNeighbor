import React from "react";
import cl from "./Favorites.module.css"

const Favorites: React.FC = () => {
    return(
        <div className={cl.favorites}>
            ИЗБРАННОЕ
        </div>
    )
}

export {Favorites}