import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../..";
import cl from "./ProfileData.module.css"
import { useTypedSelector } from "../../hooks/useTypedSelector";

const ProfileData: React.FC = () => {
    const { auth } = useContext(Context);
    const { name, firstName, phone } = useTypedSelector(state => state.userData)
    const logout = async () => {
        auth.signOut()
        window.location.href = "/advs"
    }

    return (
        <div className={cl.profileData}>
            <div className={cl.navbar}>
                <div className={cl.photo} />
                <div className={cl.name}>{name}{firstName}</div>
                <div>{phone}</div>
                <div className={cl.correct} />
            </div>

            <div className={cl.menu}>
                <Link to="myadvs"><p className={cl.partMenu}>Мои объявления</p></Link>
                <Link to="favorites"><p className={cl.partMenu}>Избранное</p></Link>
                <Link to="mycomments"><p className={cl.partMenu}>Мои отзывы</p></Link>
                <p className={cl.partMenu} onClick={logout}>Выйти</p>
            </div>
        </div>
    )
}

export { ProfileData }