import { LoginContainer, LoginWrapper } from "../styles/LoginStyled";


const Login = () => {
    return (
        <LoginContainer>
            <LoginWrapper method="POST">
                <h1>Login</h1>
                <label>Usuário</label>
                <input type={'text'} maxLength={40} name="txtUser" placeholder="user..."></input>
                <label>Senha</label>
                <input type={'text'} maxLength={40} name="txtPassword" placeholder="password..."></input>
                <button>Login</button>
            </LoginWrapper>
        </LoginContainer>
    );
}

export default Login;