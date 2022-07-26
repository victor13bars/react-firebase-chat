import React, {useContext} from 'react';
import {Box, Button, Container, Grid, ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import {purple} from "@mui/material/colors";
import {Context} from "../index";
import firebase from 'firebase/compat/app'

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
        signIn: {
            main: purple[500],
            contrastText: '#fff',
        },

    },
});


const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Grid className='wrapper' container>
                    <Grid width={400} alignItems={"center"} direction={"column"} container>
                        <Box p={5}>
                            <Button
                                onClick={login}
                                color={"signIn"}
                                variant={"contained"}
                            >
                                Войти с помощью Google
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};

export default Login;