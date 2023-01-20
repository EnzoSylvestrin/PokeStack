import { useEffect, useState } from "react";

import Link from "next/link";
import { AxiosResponse } from "axios";

import { toast } from "react-hot-toast";

import Api from "../../utils/Api";
import { User } from "../../pages/api/models/Types";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";

import { HeaderContainer, LoginStyled, Logo, Ul } from "./HeaderStyled";
import { AccountContainer } from "../../styles/Commom";
import { FormatUser } from "../../utils/Functions";

function Header() {

    const [Account, setAccount] = useState<User>();

    useEffect(() => {
        const AccountId = localStorage.getItem('Account');
        if (AccountId) {
            (async () => {
                try {
                    const Usuario: AxiosResponse<User> = await Api.get<User>(`/${AccountId}`);
                    setAccount(Usuario.data);
                }
                catch (e) {
                    toast.error("Ocorreu um erro!", {
                        position: "bottom-right"
                    });
                }
            })();
        }
    }, [])

    return (
        <header>
            <HeaderContainer>
                <Heading size="lg">
                    <Logo>PokeStack</Logo>
                </Heading>
                {
                    Account != null
                        ?
                        <AccountContainer>
                            <p>{FormatUser(Account.user)}</p>
                        </AccountContainer>
                        :
                        <Ul>
                            <li>
                                <Link href="/Login"><LoginStyled>Login</LoginStyled></Link>
                            </li>
                            <li>
                                <Link href="/SignUp"><Button>SignUp</Button></Link>
                            </li>
                        </Ul>
                }
            </HeaderContainer>
        </header>
    );
}

export default Header;