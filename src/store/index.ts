import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {Reducers} from './reducers';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';

const persistConfig = {
  key: 'devaMeet',
  storage: AsyncStorage,
  whiteList: ['auth', 'message'],
};

const persistedReducer = persistReducer(persistConfig, Reducers);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));

export const persistor = persistStore(store);
