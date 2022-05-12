import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExampleScreen from "./screens/ExampleScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator()

const AppNavigation = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    options={{
                        tabBarIcon: ({size, color}) => {
                            return <Icon name="home" size={size} color={color} />
                        }
                    }}
                    name="Home" 
                    component={ExampleScreen}
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