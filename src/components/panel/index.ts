import styled from "styled-components"
export const BorderedPanel = styled.div`
    border: 1px solid ${p => p.color};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;