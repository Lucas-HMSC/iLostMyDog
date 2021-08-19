import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginSuccess } from '../screens/LoginSuccess';
import { LoginFailed } from '../screens/LoginFailed';
import { Register } from '../screens/Register';
import { Continue } from '../screens/Continue';
import { Login } from '../screens/Login';
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

      <Screen 
        name='Login'
        component={Login}
      />

      <Screen 
        name='LoginSuccess'
        component={LoginSuccess}
      />

      <Screen 
        name='LoginFailed'
        component={LoginFailed}
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