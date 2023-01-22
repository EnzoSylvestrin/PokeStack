import Model from './schemas/FavoritesModel';

import { createHandler }from './connection/CreateHandler';

const InsertFavorites = createHandler();

InsertFavorites.post(async (req : any, res : any) => {

    try {
        const data = req.body;

        const Favorite : any = await Model.find({User: data.id});

        //if (Favorite.lenght == 0) {
            await Model.create({
                orders: [data.order],
                User: data.id
            }).then((response) => {
                res.status(200).send(response);
            }).catch((error) => {
                res.status(400).send(error);
            });
        // }
        // else {
        //     let update = {
        //         order: [...Favorite.orders, data.orders] 
        //     }

        //     await Model.findByIdAndUpdate({User: data.id}, update);
        // }
    }
    catch (error) {
        res.status(400).send(error);
    }
});

export default InsertFavorites;