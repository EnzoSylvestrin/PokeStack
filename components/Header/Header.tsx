import React, { useEffect, useMemo, useState, useRef } from "react";

import Link from "next/link";
import { AxiosResponse } from "axios";

import { usePopper } from 'react-popper';

import Swal from 'sweetalert2';
import { toast } from "react-hot-toast";

import { CaretRight, Heart, IconProps, SignOut } from "phosphor-react";

import Api from "../../utils/Api";
import { User } from "../../pages/api/models/Types";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import LoadingComponent from "../Loading/LoadingComponent";
import Text from "../Text/Text";
import { Input } from "../Input/Input";

import { FormatUser } from "../../utils/Functions";

import { AccountContainer, ContainerActions, ContainerCaret, DivPopper, HeaderContainer, HeaderPopper, LoginStyled, Logo, TextEmail, Ul } from "./HeaderStyled";
import Router, { useRouter } from "next/router";

function Header() {

    const router = useRouter()

    const IconRef = useRef<any>(null);

    const [Account, setAccount] = useState<User>();
    const [Loading, setLoading] = useState<boolean>(false);

    const [showList, setShowList] = useState(false);

    const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

    const customModifier = useMemo(
        () => ({
            name: 'offset',
            options: {
                offset: () => {
                    return [0, 4];
                },
            }
        }),
        []
    );

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [customModifier],
    });

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setReferenceElement(event.currentTarget);
        setShowList(!showList);
        IconRef.current.classList.toggle('turn');
    }

    const handleFavorites = () => {
        Router.push('/Favorites');
    }

    const handleSignOut = (event: React.MouseEvent<HTMLElement>) => {
        Swal.fire({
            title: 'Atenção...',
            text: 'Deseja realmente sair da sua conta?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#0d9920',
            cancelButtonColor: '#d33',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('Account');
                setAccount(undefined);
                router.reload();
            }
        });
    }

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
                        <>
                            <AccountContainer onClick={handleClick}>
                                <p>{FormatUser(Account.user)}</p>
                                <ContainerCaret>
                                    <CaretRight ref={IconRef} />
                                </ContainerCaret>
                            </AccountContainer>

                            {showList && (
                                <DivPopper ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                                    <HeaderPopper>
                                        <Text size="sm"><TextEmail>Logado com o email: <br /><span>{Account.email}</span></TextEmail></Text>
                                    </HeaderPopper>
                                    <ContainerActions>
                                        <div onClick={handleFavorites}>
                                            <Input.Icon >
                                                <Heart />
                                            </Input.Icon>
                                            <Text>
                                                <p>Favoritos</p>
                                            </Text>
                                        </div>
                                        <div onClick={handleSignOut}>
                                            <Input.Icon>
                                                <SignOut />
                                            </Input.Icon>
                                            <Text>
                                                <p>Logout</p>
                                            </Text>
                                        </div>
                                    </ContainerActions>
                                </DivPopper>
                            )}
                        </>
                        :
                        Loading
                            ?
                            <LoadingComponent align="right" />
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