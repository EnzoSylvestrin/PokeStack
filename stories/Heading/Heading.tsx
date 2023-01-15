import { ReactNode } from "react";
import { HeadingComponent } from "./HeadingStyled";

export type HeadingProps = {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
};

function Heading(props: HeadingProps) {
    return (
        <HeadingComponent size={props.size}>
            {props.children}
        </HeadingComponent>
    );
}

export default Heading; 