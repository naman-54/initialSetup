/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const UserComment = ({data}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
      <View
        style={{
          maxWidth: '60%',
          backgroundColor: '#0078d3',
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 12,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', alignSelf: 'center'}}>{data}</Text>
      </View>
    </View>
  );
};

export default UserComment;
