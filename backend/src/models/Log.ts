import { model, Schema, Model, Document } from 'mongoose';

interface ILog extends Document {
  eventTime?: Date;
  eventName?: string;
  parameters?: any;
  userInfo?: any;
}

const MovePageParams = new Schema({
  prev: String,
  next: String,
  component: String,
  button: String,
  type: String,
  id: Number,
  log: String,
  page: String,
  target: String,
});

const UserInfoParams = new Schema({
  isLoggedIn: Boolean,
  user: Object,
});

const LogSchema: Schema = new Schema({
  eventTime: Date,
  eventName: String,
  parameters: MovePageParams,
  userInfo: UserInfoParams,
  userAgent: String,
});

const Log: Model<ILog> = model('Log', LogSchema);

export default Log;
