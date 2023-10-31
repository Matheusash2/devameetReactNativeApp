import {createActions, createReducer} from 'reduxsauce';
import { IMessage } from '../../models/Message';

const INITIAL_STATE: IMessage | any = {};

export const {Types, Creators} = createActions({
  setMessage: ['message'],
});

const setMessage = (state = INITIAL_STATE, action: {message: IMessage | null}) => ({
  ...action.message,
});

export default createReducer(INITIAL_STATE, {[Types.SET_MESSAGE]: setMessage});
