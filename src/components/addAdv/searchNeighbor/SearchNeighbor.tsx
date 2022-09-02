import React from "react";
import { DataObject } from "./dataObject/DataObject";
import { DataPeople } from "./dataPeople/DataPeople";
import cl from "./SearchNeighbor.module.css"

const SearchNeighbor: React.FC = () => {
    return (
        <div className={cl.searchNeighbor}>
            <div className={cl.dataPeople}>
                <DataPeople/>
            </div>

            <div>
                <DataObject/>
            </div>
        </div>
    )
}

export { SearchNeighbor }