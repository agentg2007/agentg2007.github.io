import React from "react";
import ReactMarkdown from "react-markdown";

import useFetch from "@nthity/usefetch";

import { Panel } from "@components";
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
\`\`\`typescript
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
        <Panel>
            <Typography variant="body1">
                UseFetch is an easy to use fetch manager hook for react. It uses built-in browser's fetch method to call your API.
            </Typography>
        </Panel>
        <Panel bordered title="Installation">
            npm install @nthity/usefetch
        </Panel>
        <Panel bordered title="Features">
            <ul>
                <li>Fetch management.</li>
                <li>Cancelable queries.</li>
                <li>Ensures only 1 fetching is called.</li>
                <li>Prevents data leaking by previous call.</li>
            </ul>
        </Panel>
        <Panel bordered title="Usage">
            <ReactMarkdown>{usage}</ReactMarkdown>
        </Panel>
        <Panel bordered title="Demo">
            <Typography variant="caption">API: https://random-data-api.com/api/address/random_address</Typography>
            <Alert color="info" variant="filled" sx={{ margin: t.spacing(0, 0, 2) }}>
                Api result may be too fast with your connection. Try to throttle down your connection in the developer tool.
            </Alert>
            <StatusIndicator status={status} message={result?.statusText} />
            <ButtonGroup sx={{ marginTop: t.spacing(2) }}>
                <Button onClick={() => fetch("https://random-data-api.com/api/address/random_address?_t=" + Date.now())}>Send</Button>
                <Button disabled={status !== "busy"} onClick={abort}>Abort</Button>
            </ButtonGroup>
        </Panel>
        <Panel bordered title="Repository">
            https://github.com/agentg2007/useFetch
        </Panel>
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