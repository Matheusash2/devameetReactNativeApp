import * as DevameetApiService from '../DevameetApiService';
import {store} from '../../store';
import {Creators as AuthAction} from '../../store/reducers/authData';
import {Creators as UserAction} from '../../store/reducers/userData';
import {IUpdateUser} from '../../models/User';

const updateCurrentUser = async (token?: string) => {
  if (token) {
    store.dispatch(AuthAction.setToken(token));
    console.log('token: ', token);
  }

  const {data} = await DevameetApiService.get('/user');
  console.log('data user', data);
  store.dispatch(UserAction.setUser(data));
};

const update = async (body: IUpdateUser) => {
  await DevameetApiService.put('/user', body);
  await updateCurrentUser();
};

export {updateCurrentUser, update};
