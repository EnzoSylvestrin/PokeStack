import { Meta, StoryObj } from '@storybook/react';
import Text, { TextProps } from "./Text";
import { CustomText } from './TextStyled';

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: <p>Hello world</p>
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        children: (
            <CustomText>Text with styled component</CustomText>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
}

