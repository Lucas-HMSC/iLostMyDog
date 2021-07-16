import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {

  return (
    <Navigator
      headerMode='none'
    >
      <Screen 
        name='Home'
        component={Home}
      />
    </Navigator>
  );
}