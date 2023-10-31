import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import ModalMessage from './src/components/ModalMessage';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <ModalMessage />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </>
      </PersistGate>
    </Provider>
  );
};

export default App;
