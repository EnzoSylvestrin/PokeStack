import { InputHTMLAttributes, ReactNode, HTMLAttributes } from "react";
import { ContainerInput, IconSlot, InputComponent } from "./InputStyled";

import { SlotProps } from '@radix-ui/react-slot';
import { UseFormRegister } from "react-hook-form/dist/types";

export type InputRootProps = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
};

export type InputIconProps = SlotProps & {
    children: ReactNode;
}

export type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    register?: UseFormRegister<any>;
    required?: boolean;
};

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

const InputText = ({ register, label, required = false, ...rest }: InputTextProps) => {
    return (
        register != undefined && label != undefined ?
            <InputComponent
                type="text"
                {...register(label, { required })}
                {...rest}
            />
            :
            <InputComponent
                type="text"
                {...rest}
            />
    );
}


export const Input = {
    Root: InputRoot,
    Icon: InputIcon,
    Input: InputText
}