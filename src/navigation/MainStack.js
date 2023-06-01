import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import DrawerStack from './DrawerStack';
import ScreenNames from '../constants/Screens';
import DrawerStack from './DrawerStack';
import Chat from '../views/screens/chat';
import Underlyings from '../views/screens/underlyings';
import Derivatives from '../views/screens/derivatives';
import Home from '../views/screens/home/Home';

const MainStack = createStackNavigator();

class MainStackNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainStack.Navigator
        initialRouteName={ScreenNames.drawer}
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name={ScreenNames.drawer} component={DrawerStack} />
        <MainStack.Screen name={ScreenNames.homeScreen} component={Home} />
        {/* <MainStack.Screen name={ScreenNames.chatUi} component={Chat} /> */}
        <MainStack.Screen
          name={ScreenNames.underlyings}
          component={Underlyings}
        />
        <MainStack.Screen
          name={ScreenNames.derivatives}
          component={Derivatives}
        />
      </MainStack.Navigator>
    );
  }
}

export default MainStackNavigator;
