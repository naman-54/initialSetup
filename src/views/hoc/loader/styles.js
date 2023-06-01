import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../style/Size';
const Styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    top: 0,
    position: 'absolute',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    opacity: 0.5,
  },
  loaderView: {
    alignSelf: 'center',
  },
});
export default Styles;
