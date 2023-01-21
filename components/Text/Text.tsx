import { ReactNode } from "react";
import { TextStyled } from "./TextStyled";

import { SlotProps } from '@radix-ui/react-slot';

export type TextProps = SlotProps & {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    children: ReactNode;
}

function Text({ size = 'md', children, ...rest }: TextProps) {
    return (
        <TextStyled size={size} {...rest}>
            {children}
        </TextStyled>
    );
}

export default Text;