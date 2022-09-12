import React from "react";
import cl from "./Loader.module.css"
import gif from "../../../imgAndGif/loader2.gif"

const Loader: React.FC = () => {
    return (
        <div className={cl.loader}>
            <div className={cl.border}>
            <img className={cl.gif} src={gif} />
            </div>
        </div>
    )
}

export { Loader }