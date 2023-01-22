import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'favorites';

const schema = new Schema({
  User: String,
  orders: Array<Number>
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;