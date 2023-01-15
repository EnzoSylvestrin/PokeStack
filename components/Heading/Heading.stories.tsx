import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from "./Heading";
import { CustomHeading } from './HeadingStyled';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: <h1>Hello world</h1>
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        children: (
            <CustomHeading>Text with styled component</CustomHeading>
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
