import React from 'react';
import {Text} from 'react-native';


import Splash from '../Splash/Splash';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigator = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" options={{headerShown: false}}>
        {screenProps => <Splash {...screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
