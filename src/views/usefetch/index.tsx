import useFetch from "@nthity/usefetch";
import React from "react";

import { BorderedPanel } from "@components";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    ButtonGroup,
    Container,
    LinearProgress,
    Typography,
    useTheme
} from "@mui-components";

const UseFetchView = () => {
    const t = useTheme();
    const {
        status,
        result,
        abort,
        fetch
    } = useFetch();
    return <Container maxWidth="xl" sx={{
        marginBottom: t.spacing(3),
        marginTop: t.spacing(3),
    }}>
        <Alert color="info" variant="filled" sx={{ marginBottom: t.spacing(2) }}>
            Api result may be too fast with your connection. Try to throttle down your connection in the developer tool.
        </Alert>
        <BorderedPanel>
            <Box sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                marginBottom: "1rem"
            }}>
                <Typography variant="h5" component="div">UseFetch Demo.</Typography>
                <Typography variant="caption">API: https://random-data-api.com/api/address/random_address</Typography>
                <StatusIndicator status={status} message={result?.statusText} />
            </Box>
            <ButtonGroup>
                <Button onClick={() => fetch("https://random-data-api.com/api/address/random_address?_t=" + Date.now())}>Send</Button>
                <Button disabled={status !== "busy"} onClick={abort}>Abort</Button>
            </ButtonGroup>
        </BorderedPanel>
    </Container>
};
UseFetchView.displayName = "UseFetchView";
export default UseFetchView;

const StatusIndicator = ({ message, status }: {
    message: string;
    status: "busy" | "aborted" | "error" | "idle";
}) => {
    switch (status) {
        case "busy": return <LinearProgress color="primary" />
        case "error": return <Alert color="error">
            <AlertTitle>Error</AlertTitle>
            {message}
        </Alert>;
        case "aborted": return <Alert color="info">
            <AlertTitle>Request Aborted</AlertTitle>
            Your request was successfully aborted.
        </Alert>;
        default: return <Alert color="success">
            <AlertTitle>
                <Typography variant="overline">{status}</Typography>
            </AlertTitle>
        </Alert>
    }
};
StatusIndicator.displayName = "StatusIndicator";