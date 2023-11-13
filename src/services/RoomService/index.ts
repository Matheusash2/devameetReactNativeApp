import {IRoom} from '../../models/Room';
import * as DevameetApiService from '../DevameetApiService';

const getRoom = async (link: string): Promise<IRoom> => {
  const room = await DevameetApiService.get(`/room/${link}`);
  return <IRoom>room.data;
};

export {getRoom};
