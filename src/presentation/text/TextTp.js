/* eslint-disable react/prop-types */
import React from 'react'
import { StyleSheet, Text } from 'react-native';

const TextTp = ({
  title,
  type,
  style,
  numberOfLines,
  children,
  lineHeight,
  textAlign,
  lineArray,
  ellipsisReq,
  onPress
}) => (
  <Text
    onTextLayout={(event) => {
      if (lineArray) {
        lineArray(event.nativeEvent.lines)
      }
    }}
    numberOfLines={numberOfLines}
    allowFontScaling={false}
    {...(ellipsisReq ? { ellipsizeMode: 'tail', numberOfLines: 1 } : {})}
    onPress={onPress}
    style={[
      styles.text,
      {
        fontSize: type?.fontSize,
        fontFamily: type?.fontFamily,
        color: type?.color,
        lineHeight: lineHeight,
        textAlign: textAlign
      },
      style
    ]}>
    {title}
    {children}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center'
  }
})

export default TextTp;
