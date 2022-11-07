import useFetch from "@nthity/usefetch";
import React from "react";
import ReactMarkdown from "react-markdown";

import { BorderedPanel } from "@components";
import {
    Alert,
    AlertTitle,
    Button,
    ButtonGroup,
    Container,
    LinearProgress,
    Typography,
    useTheme
} from "@mui-components";

const usage = `
\`\`\`
import useFetch from "@nthity/usefetch";

const App = () => {
    const { status, result, abort, fetch } = useFetch();
    return <div>
        <p>{status}</p>
        <button onClick={() => fetch("[your URL]")}>Send</button>
        <button disabled={status !== "busy"} onClick={abort}>Abort</button>
    </div>
}
\`\`\`
`
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
        <Typography variant="h3">UseFetch</Typography>
        <BorderedPanel>
            <Typography variant="h5">Introduction</Typography>
            <Typography variant="body1">
                UseFetch is an easy to use fetch manager hook for react. It uses built-in browser's fetch method to call your API.
            </Typography>
        </BorderedPanel>
        <BorderedPanel>
            <Typography variant="h5">Installation</Typography>
            <Typography variant="body1">
                npm install @nthity/usefetch
            </Typography>
        </BorderedPanel>
        <BorderedPanel>
            <Typography variant="h5">Usage</Typography>
            <ReactMarkdown>{usage}</ReactMarkdown>
        </BorderedPanel>
        <BorderedPanel>
            <Typography variant="h5">Demo.</Typography>
            <Typography variant="caption">API: https://random-data-api.com/api/address/random_address</Typography>
            <Alert color="info" variant="filled" sx={{ margin: t.spacing(0, 0, 2) }}>
                Api result may be too fast with your connection. Try to throttle down your connection in the developer tool.
            </Alert>
            <StatusIndicator status={status} message={result?.statusText} />
            <ButtonGroup sx={{ marginTop: t.spacing(2) }}>
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