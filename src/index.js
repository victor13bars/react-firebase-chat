import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import {createTheme} from "@mui/material/styles";
import {purple} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: '#11cb5f',
        },
        neutral: {
            main: '#fff',
            contrastText: '#fff',
        },
    },
});

firebase.initializeApp({
    apiKey: "AIzaSyDc154QI2vyoGbA6QDSNCXneEBykoFDQzs",
    authDomain: "chat-react-4e764.firebaseapp.com",
    projectId: "chat-react-4e764",
    storageBucket: "chat-react-4e764.appspot.com",
    messagingSenderId: "563449359664",
    appId: "1:563449359664:web:1b7d0cf8eef1b681fcacf5",
    measurementId: "G-T8GN4BHMGE"
})

const auth = firebase.auth()
const firestore = firebase.firestore()
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        firebase,
        firestore,
        auth,
        theme
    }}>
        <App/>
    </Context.Provider>
);

