import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './SendBird/screens/Login';
import Menu from './SendBird/screens/Menu';
import Profile from './SendBird/screens/Profile';

import {Provider} from 'react-redux';
import store from './SendBird/store';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              // When logging out, a pop animation feels intuitive
              //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
