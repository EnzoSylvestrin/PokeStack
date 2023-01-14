import { createHandler }from './connection/CreateHandler';
import { NextRequest } from 'next/server';
import Model from './schemas/UserModel';
import { User } from './models/Types';

const connection = createHandler(); 

connection.get(async (req : NextRequest, res : any) => {
  
  const Users : User[] = await Model.find({}).exec();

  res.status(200).json(Users);

});

export default connection;