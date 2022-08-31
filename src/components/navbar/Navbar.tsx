import React from "react";
import { Link } from "react-router-dom";
import cl from "./Navbar.module.css"
import 'firebase/compat/auth';
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Navbar: React.FC = () => {
    const { isAuth } = useTypedSelector(state => state.isAuth)

    return (
        <div className={cl.navbar}>
            <div className="container">
                {
                    isAuth ?
                        (
                            <div className={cl.navbar}>

                                <div className={cl.mainLink}>
                                    <Link to="/">Сосед.ru</Link>
                                </div>

                                <div className={cl.links}>
                                    <div className={cl.add}>
                                        <Link to="/addads">Разместить объявление</Link>
                                    </div>

                                    <div className={cl.profile}>
                                        <Link to="/profile">Профиль</Link>
                                    </div>
                                </div>

                            </div>
                        )
                        :
                        (
                            <div className={cl.navbar}>
                                <div className={cl.mainLink}>
                                    <Link to="/">Сосед.ru</Link>
                                </div>

                                <div className={cl.links}>
                                    <div className={cl.login}>
                                        <Link to="/auth">Вход</Link>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export { Navbar }