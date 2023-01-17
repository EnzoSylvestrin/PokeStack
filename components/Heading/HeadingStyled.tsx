import styled, { css } from "styled-components";

import { Slot } from '@radix-ui/react-slot';
import { HeadingProps } from "./Heading";

export const HeadingComponent = styled(Slot) <HeadingProps>`
    color: ${props => props.theme.colors.dark.textColor};
    font-weight: 700;
    ${props => {
        switch (props.size) {
            case "sm":
                return css`
                    font-size: 20px;
                `
            case "md":
                return css`
                    font-size: 24px;
                `
            case "lg":
                return css`
                    font-size: 32px;
                `
            default:
                break;
        }
    }}
`;

export const CustomHeading = styled.h1`
    color: ${props => props.theme.colors.secondary};
`;
