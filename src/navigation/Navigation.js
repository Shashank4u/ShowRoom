import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/Auth/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";


const Stack = createNativeStackNavigator();

const Navigation =()=>{

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="Login" component={LoginScreen}  />
                <Stack.Screen name="home" component={HomeScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default Navigation;