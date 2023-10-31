import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    width: width / 2.3,
    minHeight: height / 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: colors.whiteColor,
    fontFamily: fonts.fontBold,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.165,
  },
  buttonDisabled: {
    backgroundColor: colors.grayColor02
  }
});

export default styles;
