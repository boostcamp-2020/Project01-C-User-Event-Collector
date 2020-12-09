import { model, Schema, Model, Document } from 'mongoose';

interface ILog extends Document {
  eventTime?: Date;
  eventName?: string;
  parameters?: any;
}

const MovePageParams = new Schema({
  prev: String,
  next: String,
});

const LogSchema: Schema = new Schema({
  eventTime: Date,
  eventName: String,
  parameters: MovePageParams,
});

const Log: Model<ILog> = model('Log', LogSchema);

export default Log;
