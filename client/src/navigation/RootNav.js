import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./../screens/Auth/Login/index";
import Register from "./../screens/Auth/Register/index";
import Feed from "./../screens/Home/Feed/index";

const RootStack = createStackNavigator();

const RootNav = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Feed" component={Feed} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
