import { KeyboardEvent, useEffect, useState } from 'react';

import { ThemeProvider } from "styled-components";
import { toast } from 'react-hot-toast';
import { MagnifyingGlass, X } from 'phosphor-react';
import { PokemonClient, Pokemon } from 'pokenode-ts';

import HeadComponent from "../components/HeadCoponent";
import Header from "../components/Header/Header";
import { Input } from "../components/Input/Input";
import LoadingComponent from '../components/Loading/LoadingComponent';
import Button from '../components/Button/Button';

import { HomeContainer, WrapperFilters, WrapperCards, ContainerSingle, CloseButton, ContainerExpand } from "../styles/HomeStyled";
import { theme } from "../styles/Theme";

import CardComponent from '../components/Card/Card';
import Api from '../utils/Api';
import { Favorites } from './api/models/Types';

//import Select from "react-select";

function Home() {

    const api = new PokemonClient();
    let ListCards: JSX.Element[] = [];
    let PokeList: Pokemon[] = [];

    const [pokemons, setPokemons] = useState<JSX.Element[]>([]);
    const [search, setSearch] = useState<JSX.Element>();

    const [loading, setLoading] = useState<boolean>();

    const DoSearch = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            (async () => {
                try {
                    let Pokemon = await api.getPokemonByName(e.currentTarget.value);
                    let Favorites = await getFavorites();
                    let Filled = false;
                    if (Favorites != null) {
                        for (let Favorite of Favorites) {
                            if (Favorite == Pokemon.order) {
                                Filled = true;
                                break
                            }
                        }
                    }
                    else {
                        Filled = false;
                    }
                    setSearch(<CardComponent pokemon={Pokemon} filled={Filled} />);
                }
                catch (error) {
                    toast.error('Não foi encontrado nenhum pokemon com esse nome!', {
                        position: "bottom-left",
                        id: 'error',
                        duration: 1500
                    });
                }
            })();
        }
    }

    const ExpandPokemons = () => {
        if (!loading) {
            setLoading(true);
            getPokemons(pokemons.length);
        }
    }

    const getFavorites = async () => {
        let Userid = localStorage.getItem('Account');
        if (Userid != null) {
            const Favorites = await Api.post<Favorites>('/GetFavorites', { User: Userid });
            if (Favorites.data != null) {
                return Favorites.data.orders;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }

    const getPokemons = async (limit = 0) => {
        try {
            let ListPokemons = await api.listPokemons(limit, 20);
            await Promise.all(ListPokemons.results.map(async (results) => {
                PokeList.push(await api.getPokemonByName(results.name));
            }));

            let Favorites = await getFavorites();

            for (let Pokemon of PokeList.sort((a: Pokemon, b: Pokemon) => a.order - b.order)) {
                let Filled = false;
                if (Favorites != null) {
                    for (let Favorite of Favorites) {
                        if (Favorite == Pokemon.order) {
                            Filled = true;
                            break
                        }
                    }
                }
                else {
                    Filled = false;
                }
                ListCards.push(<CardComponent pokemon={Pokemon} filled={Filled} key={Pokemon.order} />);
            }

            setPokemons(pokemons.concat(ListCards))
            setLoading(false);
        }
        catch (error) {
            console.log(error);
            toast.error('Ocorreu um erro ao carregar os pokemons!', {
                position: 'bottom-center'
            });
        }
    }

    const CloseAction = () => {
        setSearch(undefined);
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />
            <Header />
            <HomeContainer>
                <WrapperFilters>
                    <label htmlFor="Search" style={{ width: '100%' }} title="Pesquise com o enter!">
                        <Input.Root>
                            <Input.Icon>
                                <MagnifyingGlass />
                            </Input.Icon>
                            <Input.Input style={{ fontSize: "18px" }} onKeyUp={(e) => DoSearch(e)} type={'text'} id="Search" name="Search" placeholder="Pesquise pelo nome do pokemon..." />
                        </Input.Root>
                    </label>
                </WrapperFilters>
                {
                    pokemons.length > 0 && !search
                        ?
                        <>
                            <WrapperCards>
                                {pokemons}
                            </WrapperCards>
                            {
                                loading
                                    ?
                                    <LoadingComponent />
                                    :
                                    <ContainerExpand>
                                        <Button onClick={ExpandPokemons}>Ver mais</Button>
                                    </ContainerExpand>
                            }
                        </>
                        :
                        search
                            ?
                            <ContainerSingle>
                                <CloseButton onClick={CloseAction}>
                                    <X />
                                </CloseButton>
                                {search}
                            </ContainerSingle>
                            :
                            <LoadingComponent w={'300px'} h={'300px'} />
                }
            </HomeContainer>
        </ThemeProvider>
    );
}

export default Home;