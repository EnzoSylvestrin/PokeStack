import { createHandler }from './connection/CreateHandler';
import Model from './schemas/UserModel';

const CreateUsers = createHandler(); 

CreateUsers.post(async (req : any, res : any) => {

    const data = req.body.body;

    await Model.create({
        user: data.user,
        email: data.email,
        password: data.password
    }).then((response) => {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(400).send(error);
    });

});

export default CreateUsers;