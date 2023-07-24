import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { ProfileScreen } from '../Screens/ProfileScreen';
import { MenuScreen } from '../Screens/MenuScreen';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export const RestaurantTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="fast-food" color={color} size={size} />
          ), title: 'Realizar Pedido'
        }} />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ), 
          title: 'Perfil',
          tabBarStyle: {display:'none'}
        }} />
    </Tab.Navigator>
  );
}