import { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import { Check, Envelope, Lock, User as UserIcon, X } from "phosphor-react";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";

import { toast } from 'react-hot-toast';

import Button from "../components/Button/Button";
import { Input } from "../components/Input/Input";
import Text from "../components/Text/Text";
import Heading from "../components/Heading/Heading";
import Form from "../components/Form/Form";
import HeadComponent from "../components/HeadCoponent";

import { theme } from "../styles/Theme";
import { LinkStyled } from "../styles/Commom";
import { LoginContainer } from "../styles/LoginStyled";

import Api from "../utils/Api";
import { User } from "./api/models/Types";
import Link from "next/link";

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

    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const DoOnSubmit: SubmitHandler<SubmitInputs> = async (data: SubmitInputs) => {
        if (valid && !loading) {
            setLoading(true);
            if (await VerifyEmail(data)) {
                toast.promise(DoPost(data),
                    {
                        error: 'Ocorreu um erro ao criar a conta!',
                        success: 'Conta criada com sucesso!',
                        loading: 'Criando conta!'
                    },
                    {
                        position: 'bottom-center'
                    }
                )
                setLoading(false);
            }
            else {
                toast.error('Já existe um usuário com este email!', {
                    position: 'top-center'
                });
                setLoading(false);
            }
        }
        else {
            toast.error('Senhas diferentes', {
                position: 'top-center'
            });
        }
    }

    const VerifyEmail = async (data: SubmitInputs) => {
        const Users = await Api.get<Array<User>>('/GetAllUsers');
        for (let user of Users.data) {
            if (user.email == data.email) {
                return false;
            }
        }
        return true;

    }

    const DoPost = async (data: SubmitInputs) => {
        await Api.post('/CreateUser', { body: data });
    }

    const BlurAction = () => {
        if (confirmPassword == "" || password == "") {
            setStatePassword(<Lock />)
        }
        else if (password != confirmPassword) {
            setStatePassword(<X />)
            setValid(false);
        }
        else {
            setStatePassword(<Check />)
            setValid(true);
        }
    }

    useEffect(() => {
        if (confirmPassword == "" || password == "") {
            setStatePassword(<Lock />)
        }
        else if (statePassword != <Lock /> && password == confirmPassword) {
            setStatePassword(<Check />)
            setValid(true);
        }
        else if (statePassword != <Lock /> && password != confirmPassword) {
            setStatePassword(<X />)
            setValid(false);
        }
    }, [confirmPassword, password]);

    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />

            <LoginContainer>
                <Form onSubmit={handleSubmit(DoOnSubmit)}>
                    <Heading size="lg" style={{ marginBottom: '8px', textAlign: "center" }}>
                        <h1>PokeStack</h1>
                    </Heading>
                    <Text size="md" style={{ color: "#727070", margin: "4px 0", textAlign: "center" }}>
                        <p>Crie uma conta e começe a usar!</p>
                    </Text>
                    <label htmlFor="user" style={{ cursor: 'text' }}>
                        <Text size="md" style={{ margin: '16px 0' }}>
                            <p>Usuário:</p>
                        </Text>
                        <Input.Root>
                            <Input.Icon>
                                <UserIcon />
                            </Input.Icon>
                            <Input.Input type={'text'} id="user" maxLength={40} placeholder="usuário..." register={register} label="user" required />
                        </Input.Root>
                    </label>
                    <label htmlFor="email" style={{ cursor: 'text' }}>
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
                    <label htmlFor="password" style={{ cursor: 'text' }}>
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
                    <label htmlFor="passwordConfirm" style={{ cursor: 'text' }}>
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
                        style={{ marginTop: '20px', alignSelf: "center" }}
                    >
                        {loading ? 'Carregando...' : 'Criar conta'}
                    </Button>
                    <Text size="sm" style={{ marginTop: '20px', textAlign: 'center' }}>
                        <Link href="/Login">
                            <LinkStyled>
                                Ja tem uma conta? faça login!
                            </LinkStyled>
                        </Link>
                    </Text>
                </Form>
            </LoginContainer>
        </ThemeProvider>
    );
}

export default SignUp;