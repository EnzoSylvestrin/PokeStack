import { ReactNode } from "react";
import { ButtonStyled } from "./ButtonStyled";

import { SlotProps } from '@radix-ui/react-slot';

export type ButtonProps = SlotProps & {
    children: ReactNode;
}

function Button({ children, ...rest }: ButtonProps) {
    return (
        <ButtonStyled {...rest}>
            {children}
        </ButtonStyled>
    );
}

export default Button;