import styled from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
    background-color: transparent;
    border-radius: 4px;
    font-size: 18px;
    padding: 8px 8px;
    color: ${props => props.theme.colors.main};
    transition: all 0.4s ease;
    border: 1px solid ${props => props.theme.colors.main};
    cursor: pointer;

    :hover {
        box-shadow:  0 0 2px ${props => props.theme.colors.main}, 0 0 8px  ${props => props.theme.colors.main} , 0 0 16px ${props => props.theme.colors.main};
        background-color: #10ceb4;
        color: ${props => props.theme.colors.dark.textColor};
        transform: scale(0.97);
    }

    :focus {
        transform: scale(1);
    }
`