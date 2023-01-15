import { InputHTMLAttributes, ReactNode, HTMLAttributes } from "react";
import { ContainerInput, IconSlot, InputComponent } from "./InputStyled";

import { SlotProps } from '@radix-ui/react-slot';

export type InputRootProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

export type InputIconProps = SlotProps & {
    children: ReactNode;
}

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

const InputRoot = ({ children, ...rest }: InputRootProps) => {
    return (
        <ContainerInput {...rest}>
            {children}
        </ContainerInput>
    );
}

InputRoot.displayName = 'Input.Root';

const InputIcon = ({ children, ...rest }: InputIconProps) => {
    return (
        <IconSlot {...rest}>
            {children}
        </IconSlot>
    );
}

const InputText = (props: InputTextProps) => {
    return (
        <InputComponent
            type="text"
            {...props}
        />
    );
}


export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Input: InputText
}