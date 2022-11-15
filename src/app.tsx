import Menu, { DefaultTheme as MenuTheme, MenuProvider, ThemeType } from "@nthity/react-menu";
import React, { lazy, Suspense } from "react";
import {
    HashRouter as Router,
    Navigate,
    Route, Routes
} from "react-router-dom";
import styled from "styled-components";

import { ThemeProvider } from "./mui/components";

import HeaderView from "./components/header";
import GlobalStyles from "./styles/global.styles";
import { DefaultTheme as muiTheme } from "./styles/mui-styles";

const HomePage = lazy(() => import("./views/HomePage"));
const PageNotFoundView = lazy(() => import("./views/PageNotFound"));
const UseFetchView = lazy(() => import("./views/UseFetch"));

const App = () => {
    MenuTheme.bgColor = "#232323";
    return <ThemeProvider theme={muiTheme}>
        <MenuProvider theme={MenuTheme}>
            <GlobalStyles />
            <Router>
                <MainContainer>
                    <HeaderView />
                    <Menu anchor="left"
                        items={[
                            {
                                id: "home",
                                title: "Home",
                                url: "/#",
                            },
                            {
                                id: "NodeModules",
                                title: "Node Modules",
                            },
                            // {
                            //     id: "Demos-WithValidation",
                            //     parentId: "Demos",
                            //     title: "With Validation Demo",
                            //     url: "#/withvalidation"
                            // },
                            {
                                id: "UseFetch-View",
                                parentId: "NodeModules",
                                title: "UseFetch",
                                url: "#/usefetch",
                            },
                            // {
                            //     id: "UseFetch-View-Demo",
                            //     parentId: "UseFetch-View",
                            //     title: "Demo",
                            //     url: "#/usefetch?section=demo"
                            // }
                        ]}
                    >
                        <Suspense fallback={<>Loading...</>}>
                            <Routes>
                                <Route path="/usefetch" element={<UseFetchView />} />
                                <Route path="/" element={<HomePage />} />
                                <Route path="/page-not-found" element={<PageNotFoundView />} />
                                <Route path="*" element={<Navigate to="/page-not-found" replace />} />
                            </Routes>
                        </Suspense>
                    </Menu>
                </MainContainer>
            </Router>
        </MenuProvider>
    </ThemeProvider>
};
export default App;

declare module "styled-components" {
    interface DefaultTheme extends ThemeType { }
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    font-family: ${p => p.theme.font.family};
    font-size: ${p => p.theme.font.size};
` 