import React from 'react';
import {Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid className='wrapper' container>
                <Grid
                    width={400}
                    alignItems={"center"}
                    direction={"column"}
                    container
                >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;