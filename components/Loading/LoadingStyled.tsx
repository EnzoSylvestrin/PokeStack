import styled, { css } from "styled-components";

import { Loading } from "./LoadingComponent";

export const ContainerLoading = styled.div<Loading>`
    flex: 1;
    display: flex;
    align-items: center;

    ${props => {
        switch (props.align) {
            case "left":
                return css`
                    justify-content: start;
                `
            case "center":
                return css`
                    justify-content: center;
                `
            case "right":
                return css`
                    justify-content: end; 
                `
            default:
                break;
        }
    }}
`;