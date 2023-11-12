import {IMeet} from '../../models/Meet';
import * as DevameetApiService from '../DevameetApiService';

const getMeetings = async (): Promise<IMeet[]> => {
  const meetings = await DevameetApiService.get('/meet');
  return meetings.data;
};

const deleteMeet = async (id: string) => {
  await DevameetApiService._delete(`/meet/${id}`);
};

export {getMeetings, deleteMeet};
