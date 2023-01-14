import mongoose, { Schema } from 'mongoose';

const MODEL_NAME = 'users';

const schema = new Schema({
  user: String,
  password: String
});

const Model = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, schema);

export default Model;