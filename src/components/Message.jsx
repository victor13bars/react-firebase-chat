import React from 'react';
import {Avatar, Grid} from "@mui/material";

const Message = ({message, user}) => {
    /*    border: user . uid = = = message . uid ? '2px solid green': '2px dashed red',*/
    /*marginLeft: user . uid = = = message . uid ? 'auto': '10px',*/
    return (
        <div className={user.uid === message.uid ? 'myFieldMessage' : 'fieldMessage'}>
            <Grid container>
                <Avatar src={message.photoURL}/>
                <div className='message'>
                    <div className='messageWriter'>{message.displayName}</div>
                    <div className='messageText'>{message.text}</div>
                </div>
            </Grid>
        </div>
    )
        ;
};

export default Message;