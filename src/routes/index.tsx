import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../view/Login';
import Register from '../view/Register';
import Home from '../view/Home';
import EditProfile from '../view/EditProfile';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default Routes;
