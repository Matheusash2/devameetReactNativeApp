import {createActions, createReducer} from 'reduxsauce';
import { IUser } from '../../models/User';

const INITIAL_STATE: IUser | any = {};

export const {Types, Creators} = createActions({
  setUser: ['user'],
});

const setUser = (state = INITIAL_STATE, action: {user: IUser | null} ) => ({
  ...action.user
});

export default createReducer(INITIAL_STATE, {[Types.SET_USER]: setUser});
