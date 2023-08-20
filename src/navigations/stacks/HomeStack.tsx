/** @format */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, CameraScreen} from '@screens';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
      {/* <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="CollectionDetails" component={CollectionDetails} />  */}
    </Stack.Navigator>
  );
};

export default AuthStack;
