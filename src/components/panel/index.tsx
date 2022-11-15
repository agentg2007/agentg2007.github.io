import React, { PropsWithChildren } from "react";
import styled from "styled-components"
import { Typography as Text } from "@mui-components"

const BorderedPanel = styled.div`
    border: 1px solid ${p => p.color};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const Panel = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem; 
`;

export default ({
    title = "",
    bordered = false,
    children
}: PropsWithChildren<{
    title?: string;
    bordered?: boolean;
}>) => {
    const Container = bordered === true ? BorderedPanel : Panel;
    return <Container >
        <Text variant="h5">{title}</Text>
        <Text variant="body1">
            {children}
        </Text>
    </Container>
}