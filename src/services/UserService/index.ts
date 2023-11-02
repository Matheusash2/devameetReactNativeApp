import * as DevameetApiService from '../DevameetApiService';
import {store} from '../../store';
import {Creators as AuthAction} from '../../store/reducers/authData';
import {Creators as UserAction} from '../../store/reducers/userData';

const updateCurrentUser = async (token?: string) => {
  if (token) {
    store.dispatch(AuthAction.setToken(token));
  }

  const {data} = await DevameetApiService.get('/user');
  console.log('data user', data);
  store.dispatch(UserAction.setUser(data));
};

export {updateCurrentUser};
