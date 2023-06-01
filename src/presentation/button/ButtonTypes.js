import {Color} from '../../style/Color';
import {FontName, FontSizeButton} from '../../style/Font';
import {ButtonHeight} from '../../style/Size';

const ButtonTypes = {
  primaryLargeButton: {
    height: ButtonHeight.buttonLarge,
    color: Color.primary,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.white,
  },

  secondaryLargeButton: {
    height: ButtonHeight.buttonLarge,
    color: Color.secondary,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.white,
  },

  primaryLargeTransparentButton: {
    height: ButtonHeight.buttonLarge,
    color: Color.white,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.primary,
    borderColor: Color.primary,
  },

  primaryDisableButton: {
    height: ButtonHeight.buttonLarge,
    color: Color.primaryLight,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.primary,
  },
  disableButton: {
    height: ButtonHeight.buttonLarge,
    color: Color.extraLigthHover,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.secondaryDisable,
  },
  greenAddButton: {
    height: ButtonHeight.buttonMedium,
    color: Color.green,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.white,
  },
  cyanAddButton: {
    height: ButtonHeight.buttonMedium,
    color: Color.cyan,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.white,
  },
  redAddButton: {
    height: ButtonHeight.buttonMedium,
    color: Color.red,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.white,
  },
  yellowLightAddButton: {
    height: ButtonHeight.buttonMedium,
    color: Color.yellowLight,
    fontSize: FontSizeButton.buttonMedium,
    fontFamily: FontName.robotoMeduim,
    textColor: Color.white,
  },
};

export default ButtonTypes;
