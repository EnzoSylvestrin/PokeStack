import { createHandler }from './connection/CreateHandler';
import Model from './schemas/UserModel';

const CreateUsers = createHandler(); 

CreateUsers.get(async (req : any, res : any) => {

    await Model.create({
        user: req.body.user,
        email: req.body.email,
        password: req.body.password
    }).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(400).send(error);
    });

    res.status(200).json('das');

});

export default CreateUsers;