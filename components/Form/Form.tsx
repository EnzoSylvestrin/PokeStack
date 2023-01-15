import { FormHTMLAttributes } from "react";
import { FormStyled } from "./FormStyled";

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

const Form = ({ ...rest }: FormProps) => {
    return (
        <FormStyled {...rest} />
    );
}

export default Form;