import { model, Schema, Model, Document } from 'mongoose';

interface ILog extends Document {
  eventType: string;
  userAge: number;
}

const LogSchema: Schema = new Schema({
  eventType: String,
  userAge: Number,
});

const Log: Model<ILog> = model('Log', LogSchema);

export default Log;
