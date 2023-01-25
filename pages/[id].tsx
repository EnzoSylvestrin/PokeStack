import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Pokemon, PokemonAbility, PokemonClient } from "pokenode-ts";

import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

import { toast } from "react-hot-toast";
import { Barbell, Circle, Hand, Ruler, Sword } from "phosphor-react";

import BackComponent from "../components/BackComponent";
import HeadComponent from "../components/HeadCoponent";
import LoadingComponent from "../components/Loading/LoadingComponent";

import { DataContainer, DetailsContainer, IconDetails, IconWrapper, TitleContainer, Wrapper } from "../styles/DetailsStyled";

type DataDetails = {
    imgUrl: string | undefined,
    name: string,
    weight: number,
    exp: number,
    height: number;
    abilities: string[],
    moves: string[]
}

function Details() {

    const { id } = useRouter().query;

    const [data, setData] = useState<DataDetails>();

    const PokeApi = new PokemonClient();

    const ParseId = (id: string | string[] | undefined): number => {
        if (typeof id === "string") {
            return parseInt(id);
        }
        else {
            return -1;
        }
    }

    const getPokemon = async () => {
        try {
            let Pokemon = await PokeApi.getPokemonById(ParseId(id));
            let Abilitys: string[] = [];
            let Moves: string[] = [];
            if (Pokemon.abilities.length > 3) {
                for (let i = 0; i < 3; i++) {
                    Abilitys.push(Pokemon.abilities[i].ability.name);
                }
            }
            else {
                for (let ability of Pokemon.abilities) {
                    Abilitys.push(ability.ability.name);
                }
            }
            if (Pokemon.moves.length > 3) {
                for (let i = 0; i < 3; i++) {
                    Moves.push(Pokemon.moves[i].move.name);
                }
            }
            else {
                for (let move of Pokemon.moves) {
                    Moves.push(move.move.name);
                }
            }
            setData(
                {
                    imgUrl: Pokemon.sprites.front_default?.toString(),
                    name: Pokemon.name.toUpperCase(),
                    weight: Pokemon.weight,
                    exp: Pokemon.base_experience,
                    height: Pokemon.height,
                    abilities: Abilitys,
                    moves: Moves
                }
            );
        }
        catch (err) {
            console.log(err);
            toast.error("Ocorreu um erro", {
                position: 'bottom-center'
            });
        }
    }

    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <HeadComponent />
            <DetailsContainer>
                {
                    data != null
                        ?
                        <>
                            <BackComponent />
                            <TitleContainer
                                initial={{ y: -200, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }} //onScroll
                                transition={{ duration: 0.5 }}
                            >
                                <img src={data.imgUrl} alt="imagem Pokemon" />
                                <h1>{data.name}</h1>
                            </TitleContainer>
                            <DataContainer
                                initial={{ y: 200, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }} //onScroll
                                transition={{ duration: 0.5 }}
                            >
                                <Wrapper>
                                    <h1>Status:</h1>
                                    <IconWrapper>
                                        <IconDetails>
                                            <Ruler />
                                        </IconDetails>
                                        <p>{`${data.height / 10}m`}</p>
                                    </IconWrapper>
                                    <IconWrapper>
                                        <IconDetails>
                                            <Circle />
                                        </IconDetails>
                                        <p>{`${data.exp} exp`}</p>
                                    </IconWrapper>
                                    <IconWrapper>
                                        <IconDetails>
                                            <Barbell />
                                        </IconDetails>
                                        <p>{`${data.weight / 10}kg`}</p>
                                    </IconWrapper>
                                </Wrapper>
                                <Wrapper>
                                    <h1>Movimentos:</h1>
                                    {
                                        data.moves.map(move => {
                                            return <IconWrapper>
                                                <IconDetails>
                                                    <Sword />
                                                </IconDetails>
                                                <p>{move}</p>
                                            </IconWrapper>
                                        })
                                    }
                                </Wrapper>
                                <Wrapper>
                                    <h1>Habilidades:</h1>
                                    {
                                        data.abilities.map(ability => {
                                            return <IconWrapper>
                                                <IconDetails>
                                                    <Hand />
                                                </IconDetails>
                                                <p>{ability}</p>
                                            </IconWrapper>
                                        })
                                    }
                                </Wrapper>
                            </DataContainer>
                        </>
                        :
                        <LoadingComponent w={"350px"} h={"350px"} />
                }

            </DetailsContainer>
        </ThemeProvider >
    );
}

export default Details;