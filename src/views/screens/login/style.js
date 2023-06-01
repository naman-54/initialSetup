import {StyleSheet} from 'react-native';
import {Color} from '../../../style/Color';
import {FontName} from '../../../style/Font';
import {SCREEN_WIDTH} from '../../../utility';
const PhoneStyles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  images: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
    tintColor: 'grey',
  },
  item: {
    width: SCREEN_WIDTH / 2,
    backgroundColor: Color.white,
    marginTop: 18,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: 'blue',
    width: SCREEN_WIDTH / 2,
    borderRadius: 5,
    height: 55,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    color: Color.white,
    alignSelf: 'center',
    fontSize: 24,
    fontFamily: FontName.robotoMeduim,
  },
  forgotPassStyle: {
    color: Color.primary,
    alignSelf: 'flex-end',
    marginTop: 16,
    lineHeight: 16,
    fontWeight: '500',
  },
  btnStyle: {backgroundColor: Color.extraLigthHover, marginTop: 16},
  newTagStyle: {
    backgroundColor: Color.red,
    width: 56,
    height: 24,
    borderRadius: 80,
    position: 'absolute',
    right: 0,
    marginTop: 56,
    zIndex: 2,
    marginRight: 16,
  },
  checkboxContainer: {
    marginTop: 18,
    borderColor: 'transparent',
    marginLeft: -10,
  },
});
export default PhoneStyles;
