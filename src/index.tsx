import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { createContext } from 'react';
import { IValue } from './types';

firebase.initializeApp({
  apiKey: "AIzaSyDx8mBgihZhH0F230cUar-NTe1r59YLw58",
  authDomain: "search-neighbor.firebaseapp.com",
  projectId: "search-neighbor",
  storageBucket: "search-neighbor.appspot.com",
  messagingSenderId: "601116773720",
  appId: "1:601116773720:web:fb7d392d2320af6e77292d"
});

export const Context = createContext<IValue>({} as IValue);

const auth = firebase.auth()
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const value = {
  firebase,
  auth,
  firestore
}

root.render(
  <Provider store={store}>
    <Context.Provider value={value}>
      <App />
    </Context.Provider>
  </Provider>
);
