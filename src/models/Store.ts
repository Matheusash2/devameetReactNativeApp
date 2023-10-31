import {IAuth} from './Auth';
import { IMessage } from './Message';

interface IStoreAuth extends IAuth {}
interface IStoreMessage extends IMessage {}
export interface IStore {
  auth: IStoreAuth;
  message: IStoreMessage;
}
