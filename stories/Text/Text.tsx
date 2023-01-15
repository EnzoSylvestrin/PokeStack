import { ReactNode } from "react";
import { TextStyled } from "./TextStyled";

export type TextProps = {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
}

function Text(props: TextProps) {
    return (
        <TextStyled size={props.size}>
            {props.children}
        </TextStyled>
    );
}

export default Text;