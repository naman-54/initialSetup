import React, {useState} from 'react';
import Home from '../views/screens/home/Home';
import View, {FlatList, Text, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenNames from '../constants/Screens';
import Chat from '../views/screens/chat';

const Drawer = createDrawerNavigator();
const DrawerContent = (props, isVisible, setIsVisible) => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            if (item.id === 'home') {
              setIsVisible(true);
            } else if (item.id === 'chat') {
              props.navigation.navigate(ScreenNames.chatUi);
            } else if (item.id === 'underlyings') {
              props.navigation.navigate(ScreenNames.underlyings);
            } else if (item.id === 'derivatives') {
              props.navigation.navigate(ScreenNames.derivatives);
            }
          }}>
          <Text>{item?.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View {...props}>
      <FlatList
        data={[
          {name: 'Home', id: 'home'},
          {name: 'Chat', id: 'chat'},
          {name: 'Underlyings Page', id: 'underlyings'},
          {name: 'Derivatives Page', id: 'derivatives'},
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

const DrawerStack = () => {
  // const netInfo = useNetInfo();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Drawer.Navigator
      initialRouteName={ScreenNames.homeScreen}
      drawerContent={props => DrawerContent(props, isVisible, setIsVisible)}>
      <Drawer.Screen name={ScreenNames.chatUi} component={Chat} />
      {/* <Drawer.Screen name={ScreenNames.chatUi} component={Chat} /> */}
      {/* <Drawer.Screen name="Notifications" component={ScreenNames.homeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerStack;
