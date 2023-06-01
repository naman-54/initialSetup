import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStack';
import AuthStackNavigator from './AuthStack';
import {connect} from 'react-redux';

const MainNavigation = props => {
  const {isLoggedIn} = props;

  return (
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state?.loginReducer?.isLoggedin ?? false,
  };
};
export default connect(mapStateToProps, null)(MainNavigation);
