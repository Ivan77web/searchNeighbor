import { useContext, useEffect } from 'react';
import cl from "./App.module.css"
import { Navbar } from '../navbar/Navbar';
import { AppRouter } from '../AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Context } from '../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth)
  const [allUsers] = useCollectionData(
    firestore.collection("allUsers")
  )

  useEffect(() => {
    if (user && allUsers) {
      allUsers.map(oneUser => {
        if (oneUser.id === user.uid) {
          let userData = {
            name: oneUser.name,
            firstName: oneUser.firstName,
            id: oneUser.id,
            phone: oneUser.phone,
            email: oneUser.email,
          }
  
          dispatch({type: "addUserData", payload: userData})
          dispatch({type: "auth"})
        }
      })
    }
  },[allUsers])

  return (
    <div className={cl.app}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
