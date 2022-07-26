import React, {useContext, useEffect, useLayoutEffect, useRef, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField, ThemeProvider} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import firebase from "firebase/compat/app";
import Message from "./Message";

const Chat = () => {
    const {auth, firestore, theme} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const h2ref = useRef();
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
    const scrolling = () => {
        h2ref.current?.scrollIntoView(true)
    }

    const sendMessage = async () => {
        await firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
        scrolling()
    }

    useEffect(() => {
        scrolling()
    }, [loading]);

    if (loading) {
        return <Loader/>
    }
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid container className='wrapper'>
                    <div className='fieldCommunication'>
                        {messages.map((message, index) =>
                            <Message key={index} message={message} user={user}/>
                        )}
                        <div ref={h2ref}/>
                    </div>
                    <Grid
                        container
                        direction={"column"}
                        alignItems={"flex-end"}
                        style={{width: '80%'}}
                    >
                        <TextField
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            fullWidth
                            // rowsMax={2}
                            variant={"outlined"}
                        />
                        <Button style={{marginTop: '10px'}} variant={"outlined"}
                                onClick={sendMessage}>Отправить</Button>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Chat;