import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Animated,
} from 'react-native';
import {Color} from '../../style/Color';
const animationDuration = 200;
const debounceDuration = 1000;
const radious = 3;
const borderWidth = 1;
let debounce;

const ButtonTp = ({
  onPress,
  title,
  type,
  width,
  icon,
  rightIcon,
  style,
  disabled,
  animationDisabled,
  numberOfLines,
  isDebounce = true,
  textColor,
  buttonClicked,
  marginTop,
}) => {
  const [paddingAnimation] = useState(new Animated.Value(0));
  if (!buttonClicked) {
    buttonClicked = () => {
      Animated.sequence([
        Animated.timing(paddingAnimation, {
          toValue: 5,
          duration: animationDuration,
          useNativeDriver: false,
        }),
        Animated.timing(paddingAnimation, {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: false,
        }),
      ]).start();
      if (isDebounce && onPress) {
        if (debounce) {
          clearTimeout(debounce);
        } else {
          onPress();
        }
        debounce = setTimeout(() => {
          debounce = null;
        }, debounceDuration);
      } else if (onPress) {
        onPress();
      }
    };
  }

  return (
    <Animated.View
      style={[
        {
          height:
            type?.height + (marginTop || marginTop === 0) ? marginTop : 10,
          padding: animationDisabled ? 0 : paddingAnimation,
        },
      ]}>
      <TouchableOpacity
        onPress={buttonClicked}
        disabled={disabled || false}
        activeOpacity={1}
        style={[
          styles.buttonContainer,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            height: type?.height,
            marginTop: marginTop || marginTop === 0 ? marginTop : 10,
            width: width || undefined,
            backgroundColor: type?.color,
            borderColor: type?.borderColor ? type?.borderColor : undefined,
            borderWidth: type?.borderColor ? borderWidth : 0,
          },
          style,
        ]}>
        {icon && (
          <Image source={icon} style={styles.icon} resizeMode={'contain'} />
        )}

        <Text
          numberOfLines={numberOfLines}
          style={[
            styles.buttonText,
            {
              fontSize: type?.fontSize,
              fontFamily: type?.fontFamily,
              color: textColor || type?.textColor,
            },
          ]}>
          {title}
        </Text>
        {rightIcon && (
          <Image
            source={rightIcon}
            style={styles.righticon}
            resizeMode={'contain'}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: radious,
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
  },
  righticon: {
    height: 15,
    width: 15,
    marginLeft: 10,
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
    alignSelf: 'center',
  },
  disableButtonBackground: {
    backgroundColor: Color.secondary,
  },
  disableButtonTextColor: {
    color: Color.black,
  },
});

export default ButtonTp;
