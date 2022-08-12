import Menu, { MenuProvider } from "@nthity/react-menu";
import React from "react";
import GlobalStyles from "./styles/global.styles";

const App = () => {
    return <MenuProvider>
        <GlobalStyles />
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Menu anchor="left" items={[{
                id: "home",
                title: "Home",
                url: "/"
            }, {
                id: "Demos-WithValidation",
                title: "With Validation Demo",
                url: "/demos/with-validation"
            }]}>

            </Menu>
        </div>
    </MenuProvider>
};
export default App;