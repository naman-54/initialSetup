import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../../component/base-screen';
import ChatStyles from './style';
import ChatScreen from '../../../component/chat-screen/ChatScreen';
import ChatInputSection from '../../../component/chat-screen/ChatInputSection';

const Derivatives = props => {
  return (
    <BaseScreen {...props} headerType={'back'} title={'Derivatives Page'}>
      <View style={ChatStyles.parentScreen}>
        <View>
          <Text>Hi Derivatives Page</Text>
        </View>
      </View>
    </BaseScreen>
  );
};

export default Derivatives;
