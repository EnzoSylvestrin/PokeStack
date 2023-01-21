import axios from 'axios';

export default axios.create({
    baseURL: '/api'
});

export const PokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});