import { createHandler }from './connection/CreateHandler';
import Model from './schemas/UserModel';
import { User } from './models/Types';
import { NextApiRequest } from 'next';

const connection = createHandler(); 

connection.get(async (req : NextApiRequest, res : any) => {
  const { id } = req.query;

  const GetUser : User = await Model.findById({_id: id}).catch((error) => {
    res.status(400).json(error);
  });

  res.status(200).json(GetUser);

});

export default connection;