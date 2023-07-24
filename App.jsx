import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { FirebaseState } from './src/context/Firebase/FirebaseState';
import { OrderState } from './src/context/Order/OrderState';
import { ButtonCart } from './src/components/ButtonCart';

const App = () => {

  return (
    <FirebaseState>
      <OrderState>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </OrderState>
    </FirebaseState>
  )
}

export default App;