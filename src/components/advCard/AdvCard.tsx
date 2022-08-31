import React, { useContext, useEffect, useState } from "react";
import { IAdsCardProps } from "../../types/advCard";
import cl from "./AdvCard.module.css"
import { Link } from "react-router-dom";

const AdvCard: React.FC<IAdsCardProps> = ({ adv }) => {
    return (
        <Link to={`/advs/${adv.idOwner}_${adv.advId}`}>
            <div className={cl.advCard}>
                {adv.title}
                {adv.body}
                {adv.price}
            </div>
        </Link>
    )
}

export { AdvCard }