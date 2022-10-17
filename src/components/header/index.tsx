import React from "react"
import styled from "styled-components"

const HeaderView = ({ className = "" }) => {
    return <div className={className}>
        <LogoContainer>
            <h1>nthity</h1>
        </LogoContainer>
        <div></div>
    </div>
};
export default styled(HeaderView)`
    display: flex;
    flex-direction: row;
    background-color: ${p => p.theme.bgColor};
    color: #ffffff;
`;

const LogoContainer = styled.div`
    margin: ${p => `0 ${p.theme.spacing * 1.5}px`};
    display: flex;
    flex-direction: row;  
    & > img {
        margin: auto;
    }
`;