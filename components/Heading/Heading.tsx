import { ReactNode } from "react";
import { HeadingComponent } from "./HeadingStyled";

import { SlotProps } from '@radix-ui/react-slot';

export type HeadingProps = SlotProps & {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
};

function Heading({ size, children, ...rest }: HeadingProps) {
    return (
        <HeadingComponent size={size} {...rest}>
            {children}
        </HeadingComponent>
    );
}

export default Heading; 