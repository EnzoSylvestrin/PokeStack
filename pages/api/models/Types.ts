export type User = {
    _id: string,
    email: string,
    user: string,
    password: string
};

export type Favorites = {
    idUser: string,
    orders: number[]
}