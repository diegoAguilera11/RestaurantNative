import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import { RestaurantTab } from './RestaurantTabs';
import DetailSaucerScreen from '../Screens/Saucer/DetailSaucerScreen';
import ResumeOrderScreen from '../Screens/Order/ResumeOrderScreen';
import { ProgressOrderScreen } from '../Screens/ProgressOrderScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="RestaurantTab" component={RestaurantTab} />
      <Stack.Screen name="SaucerDetail" component={DetailSaucerScreen} options={{ ...TransitionPresets.FadeFromBottomAndroid, }} />
      <Stack.Screen name="ResumeOrder" component={ResumeOrderScreen} options={{ ...TransitionPresets.FadeFromBottomAndroid, }} />
      <Stack.Screen name="ProgressOrder" component={ProgressOrderScreen} options={{ ...TransitionPresets.FadeFromBottomAndroid, }} />
    </Stack.Navigator>
  );
}