import Model from './schemas/FavoritesModel';
import { Favorites } from './models/Types';

import { createHandler } from './connection/CreateHandler';

const connection = createHandler();

connection.post(async (req: any, res: any) => {

    let id = req.body.User;

    const Favorite: Favorites = await Model.findOne({User: id}).exec();

    res.status(200).json(Favorite);

});

export default connection;