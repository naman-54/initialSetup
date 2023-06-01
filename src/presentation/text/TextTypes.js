import { Color } from '../../style/Color'
import { FontName, FontSizeHeading, FontSizeBody, FontSizeSubheading } from '../../style/Font'

const TextTypes = {
  headingOneText: {
    color: Color.dark,
    fontSize: FontSizeHeading.headingOne,
    fontFamily: FontName.robotoMeduim
  },
 
  headingTwoText: {
    color: Color.dark,
    fontSize: FontSizeHeading.headingTwo,
   fontFamily: FontName.robotoRegular
  },
  headingThreeText: {
    color: Color.dark,
    fontSize: FontSizeHeading.headingThree,
   fontFamily: FontName.robotoRegular
  },
  subTitleOneText: {
    color: Color.dark,
    fontSize: FontSizeSubheading.subHeadingOne,
    fontFamily: FontName.robotoRegular
  },
  subTitleMedium16Text: {
    color: Color.dark,
    fontSize: FontSizeSubheading.bodyOne,
  fontFamily: FontName.robotoMeduim
  },
  subTitleMediumText: {
    color: Color.primary,
    fontSize: FontSizeSubheading.subHeadingOne,
    fontFamily: FontName.robotoMeduim
  },
  bodyOneText: {
    color: Color.primary,
    fontSize: FontSizeBody.bodyOne,
    fontFamily: FontName.robotoRegular
  },
  bodyTwoText: {
    color: Color.dark,
    fontSize: FontSizeBody.bodyTwo,
    fontFamily: FontName.robotoRegular
  },
  medium14: {
    color: Color.dark,
    fontSize: FontSizeBody.bodyTwo,
    fontFamily: FontName.robotoMeduim
  },
  bodyThreeText: {
    color: Color.dark,
    fontSize: FontSizeBody.bodyThree,
    fontFamily: FontName.robotoRegular
  }
}

export default TextTypes
