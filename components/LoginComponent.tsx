import { useState } from "react";

import { Envelope, Lock } from "phosphor-react";

import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useForm } from "react-hook-form";

import { toast } from 'react-hot-toast';

import Button from "./Button/Button";
import { Input } from "./Input/Input";
import Text from "./Text/Text";
import Heading from "./Heading/Heading";
import Form from "./Form/Form";

import { LoginContainer } from "../styles/LoginStyled";
import { LinkStyled } from "../styles/Commom";
import Api from "../utils/Api";

import { User } from "../pages/api/models/Types";
import Link from "next/link";

import Router from "next/router";

type SubmitInputs = User;

const LoginComponent = () => {
    const { register, handleSubmit } = useForm<SubmitInputs>();
    const [loading, setLoading] = useState(false);

    const DoOnSubmit: SubmitHandler<SubmitInputs> = (data: SubmitInputs) => {
        CreatePromise(data);
    }

    const CreatePromise = async (data: SubmitInputs) => {
        if (!loading) {
            setLoading(true);
            const Users = await Api.get<User[]>('/GetAllUsers');
            for (let user of Users.data) {
                if (user.email == data.email && user.password == data.password) {
                    localStorage.setItem('Account', user._id);
                    Router.push('/');
                    return;
                }
            }
            toast.error('Usuário inválido, tente novamente!', {
                position: 'bottom-center'
            });
            setLoading(false);
        }
    }

    return (
        <LoginContainer>
            <Form onSubmit={handleSubmit(DoOnSubmit)}>
                <Heading size="lg" style={{ marginBottom: '8px', textAlign: "center" }}>
                    <h1>PokeStack</h1>
                </Heading>
                <Text size="md" style={{ color: "#727070", margin: "4px 0", textAlign: "center" }}>
                    <p>Faça o login e entre no site!</p>
                </Text>
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
                <Button
                    type="submit"
                    style={{ marginTop: '16px', alignSelf: "center" }}
                >
                    {loading ? 'Carregando...' : 'Login'}
                </Button>
                <Text size="sm" style={{ marginTop: '20px' }}>
                    <Link href="/SignUp">
                        <LinkStyled>Não tem uma conta ainda? crie uma agora!</LinkStyled>
                    </Link>
                </Text>
            </Form>
        </LoginContainer>
    );
}

export default LoginComponent;