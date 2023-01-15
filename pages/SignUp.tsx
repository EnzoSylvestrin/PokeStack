import { Check, Envelope, Lock, User } from "phosphor-react";

import { useForm } from "react-hook-form";

import Button from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import Text from "../components/Text/Text";
import Heading from "../components/Heading/Heading";
import Form from "../components/Form/Form";
import HeadComponent from "../components/HeadCoponent";

import { LoginContainer } from "../styles/LoginStyled";
import { LinkStyled } from "../styles/Commom";
import { toast } from "react-hot-toast";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useEffect } from "react";

type SubmitInputs = {
    user: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp = () => {
    const { register, handleSubmit } = useForm<SubmitInputs>();

    const DoOnSubmit: SubmitHandler<SubmitInputs> = (data: SubmitInputs) => {
        console.log(data);
    }

    useEffect(() => {
        register('user', { required: true })
        register('email', { required: true })
        register('password', { required: true })
        register('confirmPassword', { required: true })
    }, [])

    return (
        <>
            <HeadComponent />
            <LoginContainer>
                <Form onSubmit={handleSubmit(DoOnSubmit)}>
                    <Heading size="lg" style={{ marginBottom: '8px', textAlign: "center" }}>
                        <h1>PokeStack</h1>
                    </Heading>
                    <Text size="md" style={{ color: "#727070", margin: "4px 0", textAlign: "center" }}>
                        <p>Crie uma conta e começe a usar!</p>
                    </Text>
                    <label htmlFor="user">
                        <Text size="md" style={{ margin: '16px 0' }}>
                            <p>Usuário:</p>
                        </Text>
                        <Input.Root>
                            <Input.Icon>
                                <User />
                            </Input.Icon>
                            <Input.Input type={'text'} id="user" maxLength={40} placeholder="usuário..." name="user" />
                        </Input.Root>
                    </label>
                    <label htmlFor="email">
                        <Text size="md" style={{ margin: '16px 0' }}>
                            <p>Email:</p>
                        </Text>
                        <Input.Root>
                            <Input.Icon>
                                <Envelope />
                            </Input.Icon>
                            <Input.Input type={'email'} id="email" maxLength={40} placeholder="email..." name="email" />
                        </Input.Root>
                    </label>
                    <label htmlFor="password">
                        <Text size="md" style={{ margin: '16px 0' }}>
                            <p>Senha:</p>
                        </Text>
                        <Input.Root>
                            <Input.Icon>
                                <Lock />
                            </Input.Icon>
                            <Input.Input type={'password'} id="password" maxLength={40} placeholder="senha..." name="password" />
                        </Input.Root>
                    </label>
                    <label htmlFor="passwordConfirm">
                        <Text size="md" style={{ margin: '16px 0' }}>
                            <p>Confirme a senha:</p>
                        </Text>
                        <Input.Root>
                            <Input.Icon>
                                <Lock />
                            </Input.Icon>
                            <Input.Input type={'password'} id="passwordConfirm" maxLength={40} placeholder="confirme a senha..." name="confirmPassword" />
                        </Input.Root>
                    </label>
                    <Button
                        style={{ marginTop: '20px', alignSelf: "center", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}
                    >
                        Criar conta
                    </Button>
                    <Text size="sm" style={{ marginTop: '20px', textAlign: 'center' }}>
                        <LinkStyled href="/">Ja tem uma conta? faça login!</LinkStyled>
                    </Text>
                </Form>
            </LoginContainer>
        </>
    );
}

export default SignUp;