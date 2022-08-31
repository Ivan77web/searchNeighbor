import React from "react";
import cl from "./Profile.module.css"
import { ProfileData } from "../profileData/ProfileData";
import { Outlet } from "react-router-dom";

const Profile: React.FC = () => {
    return (
        <div className={cl.profile}>
            <div className="container">
                <div className={cl.profileBlock}>

                    <div className={cl.data}>
                        <ProfileData/>
                    </div>

                    <div className={cl.outlet}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Profile }