import { Password, User } from "phosphor-react";
import Button from "../stories/Button/Button";
import Heading from "../stories/Heading/Heading";
import { Input } from "../stories/Input/Input";
import Text from "../stories/Text/Text";
import { LoginContainer, LoginWrapper } from "../styles/LoginStyled";

const Login = () => {
    return (
        <LoginContainer>
            <LoginWrapper action="" method="POST">
                <Heading style={{ margin: '10px 0', textAlign: "center" }}>
                    <h1>Login</h1>
                </Heading>
                <Text size="md" style={{ margin: '16px 0' }}>
                    <p>Usuário</p>
                </Text>
                <Input.Root>
                    <Input.Icon>
                        <User />
                    </Input.Icon>
                    <Input.Input type={'text'} maxLength={40} name="txtUser" placeholder="user..." />
                </Input.Root>
                <Text size="md" style={{ margin: '16px 0' }}>
                    <p>Senha</p>
                </Text>
                <Input.Root>
                    <Input.Icon>
                        <Password />
                    </Input.Icon>
                    <Input.Input type={'text'} maxLength={40} name="txtPassword" placeholder="password..." />
                </Input.Root>
                <Button style={{ marginTop: '16px', width: '80px', alignSelf: "center", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;" }}>Login</Button>
            </LoginWrapper>
        </LoginContainer>
    );
}

export default Login;