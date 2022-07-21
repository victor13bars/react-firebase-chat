import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {ThemeProvider} from '@mui/material/styles';
import {LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const Navbar = () => {
    const {auth,theme} = useContext(Context)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <AppBar color={"primary"} position="static">
                <Toolbar variant={"dense"}>
                    <Grid columnGap={2} container justifyContent={"flex-end"}>
                        {
                            user ?
                                <Button
                                    onClick={() => auth.signOut()}
                                    color={'neutral'}
                                    variant={"outlined"}
                                >
                                    Выйти
                                </Button>
                                :
                                <Button
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                    color={'neutral'}
                                    variant={"outlined"}
                                >
                                    Логин
                                </Button>
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;