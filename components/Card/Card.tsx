import { useState } from 'react';
import Link from 'next/link';

import { Pokemon } from 'pokenode-ts';
import { toast } from 'react-hot-toast';

import { Circle, Hand, Heart, Lightbulb, Ruler } from "phosphor-react";

import Api from '../../utils/Api';

import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import { Input } from '../Input/Input';

import { CardStyled, ContainerHeart } from "./CardStyled";

export type CardProps = {
    pokemon: Pokemon,
    filled: boolean
}

type PostFavorite = {
    id: string,
    order: number
}

function Card({ pokemon, filled }: CardProps) {

    const [fill, setFill] = useState(filled);
    const [loading, setLoading] = useState(false);

    const DoPostInsert = async ({ order, id }: PostFavorite) => {
        await Api.post('/InsertFavorite', { id, order });
        setLoading(false);
    }

    const DoPostDelete = async ({ order, id }: PostFavorite) => {
        await Api.post('/DeleteFavorite', { id, order });
        setLoading(false);
    }

    const handleClickHeart = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (!loading) {
            setLoading(true);
            let idUser = localStorage.getItem('Account');
            if (idUser != null) {
                let PostObj: PostFavorite = {
                    id: idUser,
                    order: pokemon.id
                }
                if (!fill) {
                    DoPostInsert(PostObj);
                }
                else {
                    DoPostDelete(PostObj);
                }
                setFill(!fill);
            }
            else {
                toast.error('Faça login para favoritar algum pokemon!', {
                    position: 'bottom-right',
                    id: 'Login',
                    duration: 1500,
                })
            }
        }
    }

    return (
        <Link href={`/${pokemon.id}`}>
            <CardStyled className={`${pokemon.types[0].type?.name.charAt(0).toUpperCase()}${pokemon.types[0].type?.name.substring(1)}`}>
                <ContainerHeart onClick={handleClickHeart}>
                    <Heart weight={fill ? 'fill' : 'regular'} />
                </ContainerHeart>
                <img src={pokemon.sprites.front_default?.toString()} alt="Imagem do pokemon" />
                <div className='infos'>
                    <div className='title'>
                        <Text size='xxl'><p>{`#${pokemon.id} `}</p></Text>
                        <Heading size='lg'><h2><span>{pokemon.name.toUpperCase()}</span></h2></Heading>
                    </div>
                    <div className="icon">
                        <Input.Icon>
                            <Ruler />
                        </Input.Icon>
                        <Text size='xxl'><p>{`${pokemon.height / 10} m`}</p></Text>
                    </div>
                    <div className="icon">
                        <Input.Icon>
                            <Circle />
                        </Input.Icon>
                        <Text size='xxl'><p>{`${pokemon.base_experience} exp`}</p></Text>
                    </div>
                    <div className="icon">
                        <Input.Icon>
                            <Hand />
                        </Input.Icon>
                        <Text size='xxl'><p>{pokemon.moves[0].move.name}</p></Text>
                    </div>
                    <div className="icon">
                        <Input.Icon>
                            <Lightbulb />
                        </Input.Icon>
                        <Text size='xxl'><p>{pokemon.abilities[0].ability.name}</p></Text>
                    </div>
                </div>
            </CardStyled>
        </Link >
    );
}

export default Card;