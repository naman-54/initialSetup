/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Keyboard, Text, TextInput, View} from 'react-native';
import {SCREEN_HEIGHT} from '../../utility';
import {CommentTypeEnum} from '../../constants/Enum';
import UserComment from './UserComment';
import RecieverComment from './RecieverComment';
import {addComment} from '../../actions/CommentAddAction';
import {connect, useSelector} from 'react-redux';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

const ChatScreen = props => {
  //   const {dataList} = props;
  const dataList = useSelector(state => state.commentDataReducer);
  //   const dataList = [
  //     {
  //       id: '1',
  //       type: 'UserComment',
  //       comment: 'Hello',
  //     },
  //     {
  //       id: '2',
  //       type: 'RecievedComment',
  //       comment: 'Hello',
  //     },
  //     {
  //       id: '3',
  //       type: 'UserComment',
  //       comment: 'I need help with my account',
  //     },
  //     {
  //       id: '4',
  //       type: 'RecievedComment',
  //       comment: 'I need help with my account',
  //     },
  //   ];
  useEffect(() => {
    console.log('dataList', dataList);
  }, [dataList]);
  const emptyView = () => {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          marginTop: SCREEN_HEIGHT / 2 - 150,
        }}>
        <Text style={{fontSize: 24}}>No Comments present yet</Text>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <Animated.View
        key={item.id}
        style={{paddingVertical: 12, paddingHorizontal: 24}}
        entering={FadeIn.duration(1000)}
        exiting={FadeOut.duration(1000)}>
        {item.type === CommentTypeEnum.USER ? (
          <UserComment data={item.comment} />
        ) : (
          <RecieverComment data={item.comment} />
        )}
      </Animated.View>
    );
  };

  return (
    <View
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#f6f6f8'}}>
      {dataList.length !== 0 ? (
        <View>
          <Text style={{alignSelf: 'center', paddingVertical: 12}}>
            12:00 PM
          </Text>
        </View>
      ) : (
        emptyView()
      )}
      <FlatList
        data={dataList}
        inverted
        contentContainerStyle={{flexGrow: 1, flexDirection: 'column-reverse'}}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + '' + item.id}
      />
    </View>
  );
};

export default ChatScreen;
