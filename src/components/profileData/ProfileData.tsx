import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../..";
import cl from "./ProfileData.module.css"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ProfileAvatar } from "./profileAvatar/ProfileAvatar";
import { ProfileCorrectBar } from "./profileCorrectBar/ProfileCorrectBar";

const ProfileData: React.FC = () => {
    const { auth } = useContext(Context);
    const { name, firstName, phone, photo } = useTypedSelector(state => state.userData)
    const logout = async () => {
        auth.signOut()
        window.location.href = "/advs"
    }
    const [openCorrectBar, setOpenCorrectBar] = useState<boolean>(false)
    
    return (
        <div className={cl.profileData}>
            <div className={cl.navbar}>
                <div className={cl.photoBlock}>
                    <ProfileAvatar photo={photo}/>
                </div>

                <div className={cl.nameAndPhone}>
                    <div className={cl.name}>{name}&nbsp;{firstName}</div>
                    <div className={cl.phone}>{phone}</div>
                </div>

                <div className={cl.correct + " " + cl.notCopy} onClick={() => setOpenCorrectBar(!openCorrectBar)}>•••</div>
            </div>

            {
                openCorrectBar
                ?
                <ProfileCorrectBar setOpenCorrectBar={setOpenCorrectBar}/>
                :
                <div/>
            }

            <div className={cl.menu}>
                <Link to="myadvs"><p className={cl.partMenu}>Мои объявления</p></Link>
                <Link to="favorites"><p className={cl.partMenu}>Избранное</p></Link>
                <p className={cl.partMenu} onClick={logout}>Выйти</p>
            </div>
        </div>
    )
}

export { ProfileData }