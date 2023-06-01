import React from 'react';
import {Text, View} from 'react-native';
import BaseScreen from '../../../component/base-screen';
import ChatStyles from './style';
import ChatScreen from '../../../component/chat-screen/ChatScreen';
import ChatInputSection from '../../../component/chat-screen/ChatInputSection';

const Chat = props => {
  return (
    <BaseScreen {...props} headerType={'back'} title={'Chat'}>
      <View style={ChatStyles.parentScreen}>
        <View style={{flex: 0.9}}>
          <ChatScreen />
        </View>
        <View style={{flex: 0.1}}>
          <ChatInputSection />
        </View>
      </View>
    </BaseScreen>
  );
};

export default Chat;
