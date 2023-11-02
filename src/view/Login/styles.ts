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
  logo: {
    marginVertical: height*0.07,
  },
  inputPassword: {
    marginTop: height * 0.02,
    marginBottom: height * 0.05,
  },
  button: {
    width: width * 0.8,
  },
  containerSignUp: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: height * 0.05,
  },
  textSignUp: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: fonts.fontRegular,
    color: colors.grayColor03,
  },
  textSignUpLink: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: fonts.fontBold,
    textDecorationLine: 'underline',
    color: colors.primaryColor,
  },
});

export default styles;
