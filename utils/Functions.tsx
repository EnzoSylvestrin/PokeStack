import { Pokemon } from 'pokenode-ts';

import { Circle, Hand, Lightbulb, Ruler } from "phosphor-react";

import Heading from '../components/Heading/Heading';
import Text from '../components/Text/Text';
import { Input } from '../components/Input/Input';

import { Card } from "../styles/HomeStyled";

export const MakeCard = (pokemon: Pokemon) => {
    return (
        <Card key={pokemon.order}>
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
                    <Text size='xxl'><p>{`${pokemon.height * 100}m`}</p></Text>
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
        </Card>
    );
}

export const FormatUser = (user: string): string => {
    return user.substring(0, 1).toLocaleUpperCase() + user.substring(1);
}
