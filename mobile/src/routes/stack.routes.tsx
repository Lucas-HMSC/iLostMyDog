import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PublicationDogFound } from '../screens/PublicationDogFound';
import { PublicationDogLost } from '../screens/PublicationDogLost';
import { PublicationSelect } from '../screens/PublicationSelect';
import { PublicationsView } from '../screens/PublicationsView';
import { PublicationView } from '../screens/PublicationView';
import { LoginSuccess } from '../screens/LoginSuccess';
import { LoginFailed } from '../screens/LoginFailed';
import { Register } from '../screens/Register';
import { Continue } from '../screens/Continue';
import { Welcome } from '../screens/Welcome';
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

      <Screen 
        name='Welcome'
        component={Welcome}
      />

      <Screen 
        name='PublicationSelect'
        component={PublicationSelect}
      />

      <Screen 
        name='PublicationDogFound'
        component={PublicationDogFound}
      />

      <Screen 
        name='PublicationDogLost'
        component={PublicationDogLost}
      />

      <Screen 
        name='PublicationView'
        component={PublicationView}
      />

      <Screen 
        name='PublicationsView'
        component={PublicationsView}
      />
    </Navigator>
  );
}