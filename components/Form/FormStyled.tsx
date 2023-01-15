import styled from "styled-components";
import { FormProps } from "./Form";

export const FormStyled = styled.form<FormProps>`
    max-width: 400px;
    height: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;