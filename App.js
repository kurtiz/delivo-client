import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import 'react-native-url-polyfill/auto';
import {Provider} from "react-redux";
import {store} from "./store";
import {SafeAreaProvider} from "react-native-safe-area-context"; // added this to resolve URLSearchParams error

const Stack = createNativeStackNavigator();

export default function App() {
    return (
            <NavigationContainer>
                <Provider store={store}>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={HomeScreen}/>
                        <Stack.Screen name="Restaurant" component={RestaurantScreen}/>
                        <Stack.Screen name="Basket" component={BasketScreen}
                                      options={{
                                          presentation: "transparentModal",
                                          headerShown: false,
                                      }}
                        />

                    </Stack.Navigator>
                </Provider>
            </NavigationContainer>
    );
}