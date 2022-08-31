import React from "react";
import cl from "./MyComments.module.css"

const MyComments: React.FC = () => {
    return(
        <div className={cl.MyComments}>
            Мои отзывы
        </div>
    )
}

export {MyComments}