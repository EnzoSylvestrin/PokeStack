import { createHandler } from './connection/CreateHandler';
import { NextRequest } from 'next/server';
import Model from './schemas/FavoritesModel';
import { Favorites, User } from './models/Types';

const connection = createHandler();

connection.get(async (req: NextRequest, res: any) => {

    const Favorites: Favorites[] = await Model.find({}).exec();

    res.status(200).json(Favorites);

});

export default connection;