import { useEffect, useState } from "react";

import Link from "next/link";
import { AxiosResponse } from "axios";

import { toast } from "react-hot-toast";

import Api from "../../utils/Api";
import { User } from "../../pages/api/models/Types";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";

import { AccountContainer, HeaderContainer, LoginStyled, Logo, Ul } from "./HeaderStyled";
import { FormatUser } from "../../utils/Functions";
import LoadingComponent from "../Loading/LoadingComponent";

function Header() {

    const [Account, setAccount] = useState<User>();
    const [Loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const AccountId = localStorage.getItem('Account');
        if (AccountId) {
            setLoading(true);
            (async () => {
                try {
                    const Usuario: AxiosResponse<User> = await Api.get<User>(`/${AccountId}`);
                    setAccount(Usuario.data);
                    setLoading(false);
                }
                catch (e) {
                    toast.error("Ocorreu um erro!", {
                        position: "bottom-right"
                    });
                    setLoading(false);
                }
            })();
        }
    }, [])

    return (
        <header id="top">
            <HeaderContainer>
                <Heading size="lg">
                    <Logo href="#top">PokeStack</Logo>
                </Heading>
                {
                    Account != null && !Loading
                        ?
                        <AccountContainer>
                            <p>{FormatUser(Account.user)}</p>
                        </AccountContainer>
                        :
                        Loading
                            ?
                            <LoadingComponent />
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