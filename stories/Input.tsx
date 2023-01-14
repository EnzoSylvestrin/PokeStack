import { InputHTMLAttributes, ReactNode } from "react";
import { ContainerInput, IconSlot, InputComponent } from "./InputStyled";

export type InputRootProps = {
    children: ReactNode;
};

export type InputIconProps = {
    children: ReactNode;
}

export type InputTextProps = InputHTMLAttributes<HTMLInputElement>;

const InputRoot = (props: InputRootProps) => {
    return (
        <ContainerInput>
            {props.children}
        </ContainerInput>
    );
}

InputRoot.displayName = 'Input.Root';

const InputIcon = (props: InputIconProps) => {
    return (
        <IconSlot>
            {props.children}
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