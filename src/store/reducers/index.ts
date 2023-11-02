import {combineReducers} from 'redux';
import auth from './authData';
import message from './messageData';
import user from './userData';

const reducers = {
  auth,
  message,
  user
};

export const Reducers = combineReducers(reducers);
