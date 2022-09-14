import { useContext, useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import 'firebase/compat/auth';
import { Route, Routes } from "react-router";
import { Context } from "..";
import { AddAdv } from "./addAdv/AddAdv";
import { Advs } from "./advs/Advs";
import { Auth } from "./auth/Auth";
import { Profile } from "./profile/Profile";
import { AdvPage } from "./advPage/AdvPage";
import { MyAdvs } from "./profile/myAdvs/MyAdvs";
import { Favorites } from "./profile/favorites/Favorites";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Loader } from "./ui/loader/Loader";

const AppRouter = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth)
    const [allUsers, loading] = useCollectionData(
        firestore.collection("allUsers")
    )
    const [isUser, setIsUser] = useState(false)

    useEffect( () => {
        if(allUsers){
            allUsers.map( oneUser => {
                if(oneUser.email === user?.email && oneUser.id === user?.uid ){
                    setIsUser(true)
                }
            })
        }
    }, [allUsers])

    if (loading) {
        return (
            <Loader/>
        )
    } else {
        return isUser ?
            (
                <Routes>
                    <Route path="/" element={<Advs />} />
                    <Route path="/advs" element={<Advs />} />
                    <Route path='/advs/:article' element={<AdvPage />} />

                    <Route path="/profile/*" element={<Profile />}>
                        <Route path="" element={<MyAdvs />} />
                        <Route path="myadvs" element={<MyAdvs />} />
                        <Route path="favorites" element={<Favorites />} />
                    </Route>

                    <Route path="/auth" element={<Auth />} />
                    <Route path="/addads" element={<AddAdv />} />
                    <Route path="*" element={<Advs />} />
                </Routes>
            )
            :
            (
                <Routes>
                    <Route path="/" element={<Advs />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="*" element={<Advs />} />
                </Routes>
            )
    }
}

export { AppRouter }