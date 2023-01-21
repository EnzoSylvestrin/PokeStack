import { Meta, StoryObj } from '@storybook/react';
import LoadingComponent, { Loading } from './LoadingComponent';

export default {
    title: "Components/Loading",
    component: LoadingComponent,
    args: {
        w: '250px',
        h: '250px'
    },
    argTypes: {
        align: {
            options: ['left', 'center', 'right'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<Loading>

export const Default: StoryObj<Loading> = {
}

export const Left: StoryObj<Loading> = {
    args: {
        align: 'left'
    }
}

export const Right: StoryObj<Loading> = {
    args: {
        align: 'right'
    }
}

