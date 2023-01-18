import mongoose from 'mongoose';

const MONGODB_CONN_STR =  uprocess.env.MONGODB_CONN_STR;

const databaseMiddleware = async (req, res, next) => {

  try {
    if (!global.mongoose) {

      global.mongoose = await mongoose.connect(MONGODB_CONN_STR, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        maxConnecting: 10
      }).then(function () {
        console.log('Conectado ao MongoDB');
      }).catch(function (err) {
        console.log('Erro ao conectar ao MongoDB: ' + err.message);
      });
    }
  }
  catch (ex) {
    console.error(ex);
  }
  return next();

};

export default databaseMiddleware;