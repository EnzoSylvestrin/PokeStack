import { KeyboardEvent, useEffect, useState } from 'react';

import { ThemeProvider } from "styled-components";
import { toast } from 'react-hot-toast';
import { MagnifyingGlass, X } from 'phosphor-react';
import { PokemonClient, Pokemon } from 'pokenode-ts';

import HeadComponent from "../components/HeadCoponent";
import Header from "../components/Header/Header";
import { Input } from "../components/Input/Input";

import { HomeContainer, WrapperFilters, WrapperCards, ContainerSingle, CloseButton } from "../styles/HomeStyled";
import { theme } from "../styles/Theme";

import { MakeCard } from '../utils/Functions';
import LoadingComponent from '../components/Loading/LoadingComponent';
import { usePopper } from 'react-popper';

//import Select from "react-select";

function Home() {

    const api = new PokemonClient();
    let ListCards: JSX.Element[] = [];
    let PokeList: Pokemon[] = [];

    const [pokemons, setPokemons] = useState<JSX.Element[]>([]);
    const [search, setSearch] = useState<JSX.Element>();

    const DoSearch = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            (async () => {
                try {
                    let pokemon = await api.getPokemonByName(e.currentTarget.value);
                    setSearch(MakeCard(pokemon));
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

    const getPokemons = (limit = 0) => {
        (async () => {
            try {
                let ListPokemons = await api.listPokemons(limit, limit);
                await Promise.all(ListPokemons.results.map(async (results) => {
                    PokeList.push(await api.getPokemonByName(results.name));
                }));

                for (let pokemon of PokeList.sort((a: Pokemon, b: Pokemon) => a.order - b.order)) {
                    ListCards.push(MakeCard(pokemon));
                }

                setPokemons(ListCards)
            }
            catch (error) {
                toast.error('Ocorreu um erro ao carregar os pokemons!', {
                    position: 'bottom-center'
                });
            }
        })();
    }

    const CloseAction = () => {
        getPokemons();
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
                        <WrapperCards>
                            {pokemons}
                        </WrapperCards>
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