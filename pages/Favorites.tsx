import { useState, useEffect } from 'react';

import Router from 'next/router';

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

import { PokemonClient } from 'pokenode-ts';

import { toast } from 'react-hot-toast';

import CardComponent from '../components/Card/Card';
import HeadComponent from "../components/HeadCoponent";
import Header from "../components/Header/Header";
import LoadingComponent from '../components/Loading/LoadingComponent';

import { BackButton, DivBack, HomeContainer, WrapperCards } from '../styles/HomeStyled';

import { getFavorites } from '../utils/Functions';
import { ArrowArcLeft } from 'phosphor-react';

function Favorites() {

    const [pokemons, setPokemons] = useState<JSX.Element[]>([]);

    const api = new PokemonClient();
    let ListCards: JSX.Element[] = [];

    const getPokemons = async (orders: number[]) => {
        try {
            await Promise.all(orders.map(async (order) => {
                let Pokemon = await api.getPokemonById(order);
                ListCards.push(<CardComponent pokemon={Pokemon} filled={true} key={Pokemon.order} />)
            }));

            setPokemons(ListCards);
        }
        catch (error) {
            console.log(error);
            toast.error('Ocorreu um erro ao carregar os pokemons!', {
                position: 'bottom-center'
            });
        }
    }

    const handleBack = () => {
        Router.back();
    }

    useEffect(() => {
        (async () => {
            let favorites = await getFavorites();
            if (favorites != null) {
                getPokemons(favorites);
            }
            else {
                toast.error('Você não tem nenhum pokemon favorito!', {
                    position: 'bottom-center'
                });
                Router.push('/');
            }
        })();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />
            <Header />
            <HomeContainer>
                <DivBack>
                    <BackButton onClick={handleBack}>
                        <ArrowArcLeft />
                    </BackButton>
                </DivBack>
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

export default Favorites;