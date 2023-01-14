import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { Input, InputRootProps } from "./Input";

export default {
    title: "Components/Input",
    component: Input.Root,
    args: {
        children: [
            <Input.Icon>
                <Envelope />
            </Input.Icon>,
            <Input.Input placeholder="Digite seu email." />
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}

export const WithoutIcon: StoryObj<InputRootProps> = {
    args: {
        children: <Input.Input placeholder="Digite seu email." />
    }
}
