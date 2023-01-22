import Model from './schemas/FavoritesModel';

import { createHandler }from './connection/CreateHandler';

const InsertFavorites = createHandler();

InsertFavorites.post(async (req : any, res : any) => {

    try {
        const data = req.body;

        const Favorite : any = await Model.find({User: data.id});

        if (Favorite.length == 0) {
            await Model.create({
                orders: [data.order],
                User: data.id
            }).then((response) => {
                res.status(200).send(response);
            }).catch((error) => {
                res.status(400).send(error);
            });
        }
        else {

            let filter = {
                User: data.id
            }

            let update = { 
                $push: { orders: data.order } 
            }

            await Model.findOneAndUpdate(
                filter,
                update
            ).then((response) => {
                res.status(200).send(response);
            }).catch((error) => {
                res.status(400).send(error);
            });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
});

export default InsertFavorites;