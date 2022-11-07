import React from "react";

import { usePageTitle } from "@hooks";
import {
    Alert,
    AlertTitle,
    Box,
    Container,
    Typography
} from "@mui-components";
import { BrokenImage } from "@mui-icons";

const PageNotFoundView = () => {
    usePageTitle("Page Not Found");

    return <Container maxWidth="xl" sx={{
        height: "100%",
        display: "flex",
    }}>
        <Box sx={{ margin: "auto", textAlign: "center" }}>
            <Typography variant="h1" component="div">
                <BrokenImage fontSize="large" viewBox="0 -2 24 24" sx={{
                    height: "6rem",
                    width: "6rem"
                }} color="action" />404
            </Typography>
            <Alert color="error" variant="outlined">
                <AlertTitle>
                    <Typography variant="h5">
                        Sorry, your page you are looking does not exist.
                    </Typography>
                </AlertTitle>
            </Alert>
        </Box>
    </Container>
};
PageNotFoundView.displayName = "PageNotFoundView";
export default PageNotFoundView;