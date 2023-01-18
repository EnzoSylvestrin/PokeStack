import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { ButtonNotFilled, HeaderContainer, Ul } from "./HeaderStyled";

function Header() {
    return (
        <header>
            <HeaderContainer>
                <Heading style={{ marginLeft: '30px' }} size="lg">
                    <p>PokeStack</p>
                </Heading>
                <Ul>
                    <li><ButtonNotFilled>Login</ButtonNotFilled></li>
                    <li><Button>SingUp</Button></li>
                </Ul>
            </HeaderContainer>
        </header>
    );
}

export default Header;