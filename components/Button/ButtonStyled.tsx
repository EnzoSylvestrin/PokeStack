import styled from "styled-components";
import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
    background-color: var(--red);
    border-radius: 12px;
    font-size: 18px;
    padding: 10px 10px;
    color: var(--textColor);
    transition: all 0.4s ease;
    border: 1px solid transparent;
    cursor: pointer;

    :hover {
        background-color: #c01128;
        transform: scale(1.03);
    }

    :focus {
        transform: scale(1);
    }
`