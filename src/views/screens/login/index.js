import React, {useRef, useState} from 'react';
import {
  Image,
  View,
  Keyboard,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
// import {Box, Input, Icon, Item, Button} from 'native-base';
import {CommonImages} from '../../../constants/images';
import {SCREEN_WIDTH} from '../../../utility';
import {FontName} from '../../../style/Font';
import PhoneStyles from './style';
import {authenticateUser} from '../../../actions/LoginAction';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Color} from '../../../style/Color';

const LoginScreen = React.forwardRef((props, ref) => {
  const passRef = useRef();
  const [loginId, setLoginId] = useState(null);
  const [loginPass, setLoginPass] = useState(null);
  const [idError, setIdError] = useState(false);
  const [passError, setPassError] = useState(false);
  const onSignInClick = async () => {
    if (!loginId) {
      setIdError(true);
    }
    if (!loginPass) {
      setPassError(true);
    } else if (loginPass && loginPass) {
      // let obj = (await getData('Login')) ?? [];
      // let isValid = false;
      // obj.map(ele => {
      //   if (ele.userId === loginId && ele.password === loginPass) {
      //     isValid = true;
      //     return;
      //   }
      // });
      // if (isValid) {
      AsyncStorage.setItem('isLogin', 'true');
      props.authenticateUser();
      // } else {
      //   setIdError(true);
      //   setPassError(true);
      // }
    }
  };

  return (
    <View style={PhoneStyles.container}>
      <Image style={PhoneStyles.images} source={CommonImages.user} />
      <View rounded style={PhoneStyles.item}>
        <TextInput
          keyboardType="default"
          returnKeyType="next"
          placeholder="Login ID"
          placeholderTextColor="black"
          maxLength={15}
          style={{color: 'black', fontFamily: FontName.robotoMeduim}}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={loginId}
          defaultValue={''}
          onChangeText={text => {
            if (idError) {
              setIdError(false);
            }
            setLoginId(text);
          }}
        />
        {idError ? (
          <Text
            style={{
              position: 'absolute',
              bottom: -24,
              fontSize: 16,
              color: 'red',
              fontFamily: FontName.robotoRegular,
              alignSelf: 'flex-start',
            }}>
            {'Please enter valid Id'}
          </Text>
        ) : null}
      </View>
      <View rounded style={PhoneStyles.item}>
        <TextInput
          keyboardType="default"
          returnKeyType="next"
          placeholder="Password"
          placeholderTextColor="black"
          style={{color: 'black', fontFamily: FontName.robotoMeduim}}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          value={loginPass}
          secureTextEntry={true}
          defaultValue={''}
          onChangeText={text => {
            if (passError) {
              setPassError(false);
            }
            setLoginPass(text);
          }}
        />
        {passError ? (
          <Text
            style={{
              position: 'absolute',
              bottom: -24,
              fontSize: 16,
              color: 'red',
              fontFamily: FontName.robotoRegular,
              alignSelf: 'flex-start',
            }}>
            {'Please enter valid password'}
          </Text>
        ) : null}
      </View>
      <TouchableOpacity
        onPress={loginPass && loginId && onSignInClick}
        activeOpacity={0.8}
        style={[
          PhoneStyles.buttonContainer,
          {backgroundColor: loginPass && loginId ? Color.primary : 'grey'},
        ]}>
        <Text style={PhoneStyles.subHeading}>{'Login'}</Text>
      </TouchableOpacity>
    </View>
  );
});

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {authenticateUser})(LoginScreen);
