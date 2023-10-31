import {Dispatch, bindActionCreators} from 'redux';
import {Creators as AuthActions} from './reducers/authData';
import {Creators as MessageActions} from './reducers/messageData';

export const defaultActions = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      ...AuthActions,
      ...MessageActions,
    },
    dispatch
  );
