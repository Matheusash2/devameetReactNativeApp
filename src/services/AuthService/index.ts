import {ILogin, IRegister} from '../../models/Auth';
import {store} from '../../store';
import * as DevameetApiService from '../DevameetApiService';
import {updateCurrentUser} from '../UserService';
import {Creators as UserAction} from '../../store/reducers/userData';
import {Creators as AuthAction} from '../../store/reducers/authData';

const login = async (body: ILogin) => {
  const {data} = await DevameetApiService.post('/auth/login', body);
  console.log('data', data);
  await updateCurrentUser(data.token);
};

const logout = () => {
  store.dispatch(UserAction.setUser(null));
  store.dispatch(AuthAction.setToken(''));
};

const register = async (body: IRegister) => {
  await DevameetApiService.post('/auth/register', body);
};

export {login, register, logout};
