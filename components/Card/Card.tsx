import { useState } from 'react';
import Link from 'next/link';

import { Pokemon } from 'pokenode-ts';
import { toast } from 'react-hot-toast';
import { AxiosResponse } from 'axios';

import { Circle, Hand, Heart, Lightbulb, Ruler } from "phosphor-react";

import { User } from '../../pages/api/models/Types';

import Api from '../../utils/Api';

import Heading from '../Heading/Heading';
import Text from '../Text/Text';
import { Input } from '../Input/Input';

import { CardStyled, ContainerHeart } from "./CardStyled";

export type Card = {
    pokemon: Pokemon,
    filled: boolean
}

type PostFavorite = {
    id: string,
    order: number
}

function Card({ pokemon, filled }: Card) {

    const [fill, setFill] = useState(filled);

    const DoPost = async ({ order, id }: PostFavorite) => {
        console.log(await Api.post('/InsertFavorite', { id, order }));
    }

    const handleClickHeart = async (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        let idUser = localStorage.getItem('Account');
        if (idUser != null) {
            let PostObj: PostFavorite = {
                id: idUser,
                order: pokemon.order
            }
            DoPost(PostObj);
            setFill(true);

        }
        else {
            toast.error('Faça login para favoritar algum pokemon!', {
                position: 'bottom-right',
                id: 'Login',
                duration: 1500,
            })
        }
    }

    return (
        <Link href="/Login">
            <CardStyled
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }} //onScroll
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
            >
                <ContainerHeart onClick={handleClickHeart}>
                    <Heart weight={fill ? 'fill' : 'regular'} />
                </ContainerHeart>
                <img src={pokemon.sprites.front_default?.toString()} alt="Imagem do pokemon" />
                <div className='infos'>
                    <div className='title'>
                        <Text size='xxl'><p>{`#${pokemon.order}`}</p></Text>
                        <Heading size='lg'><h2><span>{pokemon.name.toUpperCase()}</span></h2></Heading>
                    </div>
                    <div className="icon">
                        <Input.Icon>
                            <Ruler />
                        </Input.Icon>
                        <Text size='xxl'><p>{`${pokemon.height / 10}m`}</p></Text>
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
        </Link>
    );
}

export default Card;