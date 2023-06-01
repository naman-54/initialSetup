/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Keyboard, Text, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {connect} from 'react-redux';
import {addComment} from '../../actions/CommentAddAction';
import {
  faPaperclip,
  faCaretSquareRight,
} from '@fortawesome/free-solid-svg-icons';
import {TouchableOpacity} from 'react-native';
import {CommentTypeEnum} from '../../constants/Enum';
import RecieverComment from './RecieverComment';

const ChatInputSection = props => {
  const [commentText, setCommentText] = useState('');
  const [disableEnter, setDisableEnter] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        bottom: 0,
      }}>
      <View style={{flex: 0.8, paddingLeft: 24, height: 70}}>
        <TextInput
          multiline={true}
          //   numberOfLines={4}
          keyboardType="default"
          returnKeyType="next"
          placeholder="Type Here"
          placeholderTextColor="black"
          style={{color: 'black', backgroundColor: 'white', height: 70}}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={commentText}
          defaultValue={''}
          onChangeText={text => {
            setCommentText(text);
          }}
          editable={!disableEnter}
        />
      </View>
      <TouchableOpacity
        style={{
          flex: 0.1,
          height: 70,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          console.log('attach');
        }}>
        <FontAwesomeIcon
          style={{height: 60, width: 40, color: '#4097d4'}}
          icon={faPaperclip}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 0.1,
          height: 70,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          const value = commentText.replace(/\s*$/, '');
          if (value && value.length !== 0 && !disableEnter) {
            props.addComment({comment: value, type: CommentTypeEnum.USER});
            setDisableEnter(true);
            setTimeout(() => {
              props.addComment({
                comment: value,
                type: CommentTypeEnum.RecieverComment,
              });
              setDisableEnter(false);
            }, 1000);
          }
          setCommentText('');
        }}>
        <FontAwesomeIcon
          style={{height: 60, width: 40, paddingHorizontal: 24}}
          icon={faCaretSquareRight}
        />
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {addComment})(ChatInputSection);
