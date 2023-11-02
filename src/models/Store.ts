import {IAuth} from './Auth';
import { IMessage } from './Message';
import { IUser } from './User';

interface IStoreAuth extends IAuth {}
interface IStoreMessage extends IMessage {}
interface IStoreUser extends IUser{}
export interface IStore {
  auth: IStoreAuth;
  message: IStoreMessage;
  user: IStoreUser;
}
