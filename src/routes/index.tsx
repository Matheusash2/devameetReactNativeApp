import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../view/Login';
import Register from '../view/Register';
import Home from '../view/Home';
import EditProfile from '../view/EditProfile';
import Meet from '../view/Meet';

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Meet" component={Meet} />
    </Stack.Navigator>
  );
};

export default Routes;
