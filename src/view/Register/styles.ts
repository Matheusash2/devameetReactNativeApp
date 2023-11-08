import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
  },
  inputTop: {
    marginTop: height * 0.05,
  },
  inputMargin: {
    marginTop: height * 0.02,
  },
  button: {
    width: width * 0.8,
    marginTop: height * 0.05,
  },
  containerSignIn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.05,
  },
  textSignIn: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: fonts.fontRegular,
    color: colors.grayColor03,
  },
  textSignInLink: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fonts.fontBold,
    textDecorationLine: 'underline',
    color: colors.primaryColor,
  },
  error: {
    textAlign: 'center',
    top: 50,
    marginHorizontal: width * 0.08,
  },
});

export default styles;
