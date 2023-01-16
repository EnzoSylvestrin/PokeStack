import { useEffect, useState } from "react";

import { Check, Envelope, Lock, User, X } from "phosphor-react";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import { toast } from 'react-hot-toast';

import Button from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import Text from "../components/Text/Text";
import Heading from "../components/Heading/Heading";
import Form from "../components/Form/Form";
import HeadComponent from "../components/HeadCoponent";

import { LoginContainer } from "../styles/LoginStyled";
import { LinkStyled } from "../styles/Commom";

import Api from "../utils/Api";

type SubmitInputs = {
    user: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUp = () => {
    const { register, handleSubmit, watch } = useForm<SubmitInputs>();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const [statePassword, setStatePassword] = useState(<Lock />);

    const DoOnSubmit: SubmitHandler<SubmitInputs> = (data: SubmitInputs) => {
        if (statePassword != <Check />) {
            toast.promise(Api.post('/CreateUser', { body: JSON.stringify(data) }),
                {
                    error: 'Ocorreu um erro ao criar a conta!',
                    success: 'Conta criada com sucesso!',
                    loading: 'Criando conta!'
                },
                {
                    position: 'bottom-center'
                }
            )
        }
        else {
            toast.error('Senhas diferentes', {
                position: 'top-center'
            });
        }
    }

    const BlurAction = () => {
        if (confirmPassword == "" || password == "") {
            setStatePassword(<Lock />)
        }
        else if (password != confirmPassword) {
            setStatePassword(<X />)
        }
        else {
            setStatePassword(<Check />)
        }
    }

    useEffect(() => {
        if (confirmPassword == "" || password == "") {
            setStatePassword(<Lock />)
        }
        else if (statePassword != <Lock /> && password == confirmPassword) {
            setStatePassword(<Check />)
        }
        else if (statePassword != <Lock /> && password != confirmPassword) {
            setStatePassword(<X />)
        }
    }, [confirmPassword, password]);

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
                            <Input.Input type={'text'} id="user" maxLength={40} placeholder="usuário..." register={register} label="user" required />
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
                            <Input.Input type={'email'} id="email" maxLength={40} placeholder="email..." register={register} label="email" required />
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
                            <Input.Input type={'password'} id="password" maxLength={40} placeholder="senha..." register={register} label="password" required />
                        </Input.Root>
                    </label>
                    <label htmlFor="passwordConfirm">
                        <Text size="md" style={{ margin: '16px 0' }}>
                            <p>Confirme a senha:</p>
                        </Text>
                        <Input.Root>
                            <Input.Icon>
                                {statePassword}
                            </Input.Icon>
                            <Input.Input type={'password'} onBlur={BlurAction} id="passwordConfirm" maxLength={40} placeholder="confirme a senha..." register={register} label="confirmPassword" required />
                        </Input.Root>
                    </label>
                    <Button
                        type="submit"
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