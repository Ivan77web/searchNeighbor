import React from "react";
import cl from "./ButtonsTypes.module.css"

interface IButtonsTypesProps{
    typeAdvs: string;
    setTypeAdvs: (value: string) => void;
}

const ButtonsTypes: React.FC<IButtonsTypesProps> = ({typeAdvs, setTypeAdvs}) => {
    return (
        <div className={cl.buttonsOfType}>
            <div
                className={typeAdvs === "searchNeighbor" ? cl.searchNeighbor + " " + cl.active : cl.searchNeighbor}
                onClick={() => setTypeAdvs("searchNeighbor")}
            >
                Ищу соседа
            </div>

            <div
                className={typeAdvs === "searchNeighbor" ? cl.searchHouse : cl.active + " " + cl.searchHouse}
                onClick={() => setTypeAdvs("searchHouse")}
            >
                Ищу квартиру для подслеления
            </div>
        </div>
    )
}

export { ButtonsTypes }