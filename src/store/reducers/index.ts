import {combineReducers} from 'redux';
import auth from './authData';
import message from './messageData';

const reducers = {
  auth,
  message,
};

export const Reducers = combineReducers(reducers);
