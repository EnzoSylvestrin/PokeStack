import { Envelope, Lock } from "phosphor-react";

import Button from "./Button/Button";
import { Input } from "./Input/Input";
import Text from "./Text/Text";
import Heading from "./Heading/Heading";
import Form from "./Form/Form";

import { LoginContainer } from "../styles/LoginStyled";
import { LinkStyled } from "../styles/Commom";

const Login = () => {
    return (
        <LoginContainer>
            <Form action="" method="POST">
                <Heading style={{ marginBottom: '8px', textAlign: "center" }}>
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
                        <Input.Input type={'email'} id="email" maxLength={40} name="txtUser" placeholder="email..." />
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
                        <Input.Input type={'password'} id="password" maxLength={40} name="txtPassword" placeholder="senha..." />
                    </Input.Root>
                </label>
                <Button
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