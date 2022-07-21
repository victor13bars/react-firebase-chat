import React from 'react';
import {Avatar, Grid} from "@mui/material";

const Message = ({message, user}) => {
    return (
        <div className='fieldMessage'>
            <Grid container>
                <Avatar src={message.photoURL}/>
                <div className='message'>
                    <div>{message.displayName}</div>
                    <div>{message.text}</div>
                </div>
            </Grid>
        </div>
    )
        ;
};

export default Message;