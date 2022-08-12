import { createGlobalStyle } from "styled-components";

export default createGlobalStyle({
    html: {
        height: "100vh",
        width: "100vw",
    },
    body: {
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
    },
    "#root": {
        height: "100vh",
        width: "100vw",
        display: "flex",
    },
});