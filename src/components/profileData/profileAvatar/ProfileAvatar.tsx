import React from "react";
import { IProfileAvatarProps } from "../../../types/ProfileAvatar";
import cl from "./ProfileAvatar.module.css"

const ProfileAvatar: React.FC<IProfileAvatarProps> = ({photo}) => {
    return (
        <div className={cl.photo}>
            <img className={cl.avatar} src={photo} />
        </div>
    )
}

export { ProfileAvatar }