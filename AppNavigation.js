import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import ExampleScreen from "./screens/ExampleScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import ExampleComponent1Screen from "./screens/ExampleComponent1Screen";
import ExampleUiScreen from "./screens/ExampleUiScreen";
import ExampleScreen6 from "./screens/ExampleScreen6"

const Stack = createNativeStackNavigator()

const ExampleStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Examples" component={ExampleScreen} />
            <Stack.Screen name="ExampleComponent1" component={ExampleComponent1Screen} />
            <Stack.Screen name="ExampleUi" component={ExampleUiScreen} />
            <Stack.Screen name="ExampleScreen6" component={ExampleScreen6} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()
const AppNavigation = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen 
                    options={{
                        tabBarIcon: ({size, color}) => {
                            return <Icon name="home" size={size} color={color} />
                        }
                    }}
                    name="Home" 
                    component={ExampleStack}
                />
                <Tab.Screen 
                    options={{
                        tabBarIcon: ({size, color}) => {
                            return <Icon name="heart" size={size} color={color} />
                        }
                    }}
                    name="Favorites"
                    component={ExampleScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation