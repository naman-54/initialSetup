import moment from 'moment';
import {Dimensions, Platform} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const isAndroid = () => {
  return Platform.OS === 'android';
};

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const dimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};
export const dateFormatter = (dateValue, format) => {
  return moment(dateValue).format(format);
};
