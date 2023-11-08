import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../view/Login";
import Register from "../view/Register";

const Routes = () => {
    const Stack = createNativeStackNavigator();  
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

export default Routes;