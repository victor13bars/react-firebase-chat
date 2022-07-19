import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {purple} from '@mui/material/colors';
import {LOGIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

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

const Navbar = () => {
    const {auth} = useContext(Context)
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