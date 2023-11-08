import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../app.json';

const {height, width} = Dimensions.get('screen');

const defaultStyles = StyleSheet.create({
  containerBackground: {
    backgroundColor: colors.grayColor04,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerModal: {
    backgroundColor: colors.whiteColor,
    borderRadius: 8,
    width: width * 0.9,
    minHeight: height * 0.27,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textError: {
    fontFamily: fonts.fontRegular,
    fontSize: 14,
    fontWeight: '400',
    color: colors.errorColor,
    lineHeight: 21,
    marginBottom: height * 0.02,
  },
});

export default defaultStyles;
