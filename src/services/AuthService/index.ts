import {ILogin} from '../../models/Auth';
import * as DevameetApiService from '../DevameetApiService';
import {updateCurrentUser} from '../UserService';

const login = async (body: ILogin) => {
  const {data} = await DevameetApiService.post('auth/login', body);
  console.log('data', data);
  await updateCurrentUser(data.token);
};

export {login};
