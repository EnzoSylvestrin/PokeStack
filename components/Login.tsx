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

type SubmitInputs = {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<SubmitInputs>();

    const DoOnSubmit: SubmitHandler<SubmitInputs> = (data: SubmitInputs) => {
        toast.promise(CreatePromise(data),
            {
                success: 'Pegou os dados!',
                error: 'Ocorreu um erro ao processar os dados!',
                loading: 'Buscando informações!'
            },
            {
                position: "bottom-center",
                style: {
                    minWidth: '90px'
                }
            },
        )
    }

    const CreatePromise = async (data: SubmitInputs) => {
        const Users = await Api.get<Array<User>>('/GetAllUsers');
        for (let user of Users.data) {
            if (user.email == data.email && user.password == data.password) {
                toast.success('Usuário válido', {
                    position: 'top-center'
                });
                return;
            }
        }
        toast.error('Usuário inválido, tente novamente!', {
            position: 'bottom-right'
        })
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
                <Button
                    type="submit"
                    style={{ marginTop: '16px', alignSelf: "center", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}
                >
                    Login
                </Button>
                <Text size="sm" style={{ marginTop: '20px' }}>
                    <LinkStyled href="/SignUp">Não tem uma conta ainda? crie uma agora! </LinkStyled>
                </Text>
            </Form>
        </LoginContainer>
    );
}

export default Login;