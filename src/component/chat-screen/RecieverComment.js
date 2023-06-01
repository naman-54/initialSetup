/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const RecieverComment = ({data}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>
      <View
        style={{
          maxWidth: '60%',
          backgroundColor: '#d1d1d3',
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 16,
          paddingVertical: 12,
          justifyContent: 'center',
        }}>
        <Text style={{color: 'black'}}>{data}</Text>
      </View>
    </View>
  );
};

export default RecieverComment;
