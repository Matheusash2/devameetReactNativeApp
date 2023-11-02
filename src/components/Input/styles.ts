import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    borderBottomColor: colors.primaryColor,
    borderBottomWidth: 1,
    marginHorizontal: width*0.1,
  },
  inputText: {
    fontFamily: fonts.fontRegular,
    fontSize: 14,
    color: colors.grayColor02,
    letterSpacing: 0.14,
    fontWeight: '400',
    width: width*0.73
  },
  textChange: {
    color: colors.primaryColor,
  },
  icon: {
    marginRight: width*0.02,
  },
});

export default styles;
