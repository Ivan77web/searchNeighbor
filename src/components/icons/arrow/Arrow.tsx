import React from "react";
import cl from "./Arrow.module.css"

const Arrow: React.FC = () => {
    return(
        <div className={cl.arrow}>
            <div className={cl.one}/>
            <div className={cl.two}/>
        </div>
    )
}

export {Arrow}