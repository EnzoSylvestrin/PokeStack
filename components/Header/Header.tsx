import Link from "next/link";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { HeaderContainer, LoginStyled, Logo, Ul } from "./HeaderStyled";

function Header() {
    return (
        <header>
            <HeaderContainer>
                <Heading size="lg">
                    <Logo>PokeStack</Logo>
                </Heading>
                <Ul>
                    <li>
                        <Link href="/Login"><LoginStyled>Login</LoginStyled></Link>
                    </li>
                    <li>
                        <Link href="/SignUp"><Button>SignUp</Button></Link>
                    </li>
                </Ul>
            </HeaderContainer>
        </header>
    );
}

export default Header;