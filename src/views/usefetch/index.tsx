import React from "react";

import { Alert, Box, Button, ButtonGroup, Typography } from "@mui-components";
import useFetch from "@nthity/usefetch";
import { useTheme } from "styled-components";
import { BorderedPanel } from "@components";

const UseFetchView = () => {
    const theme = useTheme()
    const {
        status,
        abort,
        fetch
    } = useFetch();
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing
    }}>
        <Alert color="info" variant="filled" sx={{ marginBottom: "1rem" }}>
            Api result may be too fast with your connection. Try to throttle down your connection in the developer tool.
        </Alert>
        <BorderedPanel>
            <Box sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem"
            }}>
                <Typography variant="h5" component="div">UseFetch Basic.</Typography>
                <Typography variant="overline">API: https://random-data-api.com/api/address/random_address</Typography>
                <Alert>{status}</Alert>
            </Box>
            <ButtonGroup>
                <Button onClick={() => fetch("https://random-data-api.com/api/address/random_address")}>Send</Button>
                <Button disabled={status !== "busy"} onClick={abort}>Abort</Button>
            </ButtonGroup>
        </BorderedPanel>

    </Box>
};
UseFetchView.displayName = "UseFetchView";
export default UseFetchView;