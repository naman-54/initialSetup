import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../../component/base-screen';
import ChatStyles from './style';
import ChatScreen from '../../../component/chat-screen/ChatScreen';
import ChatInputSection from '../../../component/chat-screen/ChatInputSection';

const Underlyings = props => {
  return (
    <BaseScreen {...props} headerType={'back'} title={'Underlyings Page'}>
      <View style={ChatStyles.parentScreen}>
        <View>
          <Text>Hi Underlyings Page</Text>
        </View>
      </View>
    </BaseScreen>
  );
};

export default Underlyings;
