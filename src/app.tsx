import Menu, { DefaultTheme as MenuTheme, MenuProvider, ThemeType } from "@nthity/react-menu";
import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { ThemeProvider } from "@mui-components";

import HeaderView from "./components/header";
import GlobalStyles from "./styles/global.styles";
import { DefaultTheme as muiTheme } from "./styles/mui-styles";

const HomePage = lazy(() => import("./views/homepage"));
const UseFetchView = lazy(() => import("./views/usefetch"));

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
                            }, {
                                id: "Demos",
                                title: "Demos",
                            },
                            // {
                            //     id: "Demos-WithValidation",
                            //     parentId: "Demos",
                            //     title: "With Validation Demo",
                            //     url: "#/withvalidation"
                            // },
                            {
                                id: "Demos-UseFetch",
                                parentId: "Demos",
                                title: "UseFetch Demo",
                                url: "#/usefetch",
                            }
                        ]}
                    >
                        <Suspense fallback={<>Loading...</>}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="usefetch" element={<UseFetchView />} />
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