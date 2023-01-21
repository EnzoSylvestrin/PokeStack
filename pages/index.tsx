import { useEffect, useState } from 'react';

import { ThemeProvider } from "styled-components";
import { toast } from 'react-hot-toast';
import { MagnifyingGlass } from 'phosphor-react';
import { PokemonClient, Pokemon } from 'pokenode-ts';

import HeadComponent from "../components/HeadCoponent";
import Header from "../components/Header/Header";
import { Input } from "../components/Input/Input";

import { HomeContainer, WrapperFilters, WrapperCards } from "../styles/HomeStyled";
import { theme } from "../styles/Theme";

import { MakeCard } from '../utils/Functions';
import LoadingComponent from '../components/Loading/LoadingComponent';

//import Select from "react-select";

function Home() {

    const [pokemons, setPokemons] = useState<JSX.Element[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const api = new PokemonClient();

                let PokeList: Pokemon[] = [];
                let ListCards: JSX.Element[] = [];

                let ListPokemons = await api.listPokemons(0, 0);
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
                    position: 'top-center'
                });
            }
        })();
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />
            <Header />
            <HomeContainer>
                <WrapperFilters>
                    <label htmlFor="Search" style={{ width: '100%' }}>
                        <Input.Root>
                            <Input.Icon>
                                <MagnifyingGlass />
                            </Input.Icon>
                            <Input.Input style={{ fontSize: "18px" }} type={'text'} id="Search" name="Search" placeholder="Pesquisa..." />
                        </Input.Root>
                    </label>
                </WrapperFilters>
                {
                    pokemons.length > 0
                        ?
                        <WrapperCards>
                            {pokemons}
                        </WrapperCards>
                        :
                        <LoadingComponent w={'300px'} h={'300px'} />
                }
            </HomeContainer>
        </ThemeProvider>
    );
}

export default Home;