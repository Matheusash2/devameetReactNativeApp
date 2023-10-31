import {createActions, createReducer} from 'reduxsauce';
import {IAuth} from '../../models/Auth';

const INITIAL_STATE: any = {};

export const {Types, Creators} = createActions({
  setToken: ['token'],
});

const setToken = (state = INITIAL_STATE, action: IAuth) => ({
  token: action.token,
});

export default createReducer(INITIAL_STATE, {[Types.SET_TOKEN]: setToken});
