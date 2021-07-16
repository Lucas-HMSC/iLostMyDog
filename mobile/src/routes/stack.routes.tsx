import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Continue } from '../screens/Continue';

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

      <Screen 
        name='Login'
        component={Login}
      />

      <Screen 
        name='Register'
        component={Register}
      />

      <Screen 
        name='Continue'
        component={Continue}
      />
    </Navigator>
  );
}