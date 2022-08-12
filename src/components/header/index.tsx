import React from "react"
import styled from "styled-components"

const HeaderView = ({ className = "" }) => {
    return <div className={className}>
        <h1>Nthity</h1>
    </div>
};
export default styled(HeaderView)`
    display: flex;
    flex-direction: row;
    background-color: ${p => p.theme.bgColor}
`