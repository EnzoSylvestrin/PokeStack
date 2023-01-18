import styled from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
    background-color: transparent;
    border-radius: 4px;
    font-size: 18px;
    padding: 10px 8px;
    color: ${props => props.theme.colors.main};
    transition: all 0.4s ease;
    border: 1px solid ${props => props.theme.colors.main};
    cursor: pointer;

    :hover {
        background-color: #10ceb4;
        color: ${props => props.theme.colors.dark.textColor};
        transform: scale(1.03);
    }

    :focus {
        transform: scale(1);
    }
`