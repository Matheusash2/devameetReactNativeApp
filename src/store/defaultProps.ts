import {IStore} from '../models/Store';

export const defaultProps = (state: any): IStore => ({
  auth: state.auth,
  message: state.message,
});
