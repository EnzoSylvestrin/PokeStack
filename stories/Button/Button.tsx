import { ReactNode } from "react";
import { ButtonStyled } from "./ButtonStyled";

export type ButtonProps = {
    children: ReactNode;
}

function Button(props: ButtonProps) {
    return (
        <ButtonStyled>
            {props.children}
        </ButtonStyled>
    );
}

export default Button;