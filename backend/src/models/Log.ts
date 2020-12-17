import { model, Schema, Model, Document } from 'mongoose';

interface ILog extends Document {
  eventTime?: Date;
  eventName?: string;
  parameters?: any;
  userInfo?: any;
}

const EventParams = new Schema({
  prev: String,
  next: String,
  component: String,
  button: String,
  type: String,
  id: Number,
  log: String,
  page: String,
  action: String,
  target: String,
  view: String,
});

const UserInfoParams = new Schema({
  isLoggedIn: Boolean,
  user: Number,
});

const LogSchema: Schema = new Schema({
  eventTime: Date,
  eventName: String,
  parameters: EventParams,
  userInfo: UserInfoParams,
  userAgent: String,
});

const Log: Model<ILog> = model('Log', LogSchema);

export default Log;
