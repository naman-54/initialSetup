import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenNames from '../constants/Screens';
import LoginScreen from '../views/screens/login';

const AuthStack = createStackNavigator();

class AuthStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthStack.Navigator
        initialRouteName={ScreenNames.login}
        screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={ScreenNames.login} component={LoginScreen} />
      </AuthStack.Navigator>
    );
  }
}

export default AuthStackNavigator;
