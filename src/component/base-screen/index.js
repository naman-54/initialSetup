/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {CommonImages} from '../../constants/images';
import {FontName} from '../../style/Font';
import {SCREEN_WIDTH} from '../../utility';

const header = props => {
  const getImageType = type => {
    switch (type) {
      case 'DRAWER':
        return CommonImages.drawer;
      default:
        return CommonImages.backIcon;
    }
  };
  return (
    <View style={style.header}>
      <TouchableOpacity
        onPress={() => {
          console.log('back');
        }}
        style={style.touch}>
        <Image style={style.image} source={getImageType(props?.headerType)} />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 0,
        }}>
        <Text
          numberOfLines={1}
          style={{
            fontSize: 18,
            alignSelf: 'center',
            color: 'black',
          }}>
          {props?.title}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('menu');
        }}
        style={style.touchRight}>
        <Image style={style.image} source={CommonImages.more} />
      </TouchableOpacity>
      {/* <View style={{ flex: 1, height: 70, alignItems: 'center' }}></View> */}
    </View>
  );
};

const BaseScreen = props => {
  return (
    <SafeAreaView style={[{flex: 1}, props.style]}>
      <View style={{flex: 1, borderWidth: 0}}>
        {header(props)}
        <View style={{flex: 1}}>{props.children}</View>
      </View>
    </SafeAreaView>
  );
};
export default BaseScreen;
const style = StyleSheet.create({
  container: {flex: 1},
  header: {
    height: 70,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    borderBottomColor: 'black',
    shadowOffset: 20,
    shadowOpacity: 20,
  },
  touch: {
    height: 70,
    flex: 0,
    marginLeft: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchRight: {
    height: 70,
    flex: 0,
    marginRight: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 30, width: 30, alignSelf: 'flex-start'},
});
