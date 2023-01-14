import { createHandler }from './connection/CreateHandler';
import { NextRequest } from 'next/server';
import Model from './models/UserModel';

const handler = createHandler(); 

handler.get(async (req : NextRequest, res : any) => {
  
  const Users = await Model.find({}).exec();

  res.status(200).json(Users);

});

export default handler;