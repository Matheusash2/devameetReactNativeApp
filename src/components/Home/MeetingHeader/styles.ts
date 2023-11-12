import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.grayColor01,
    borderBottomWidth: 1,
    borderTopColor: colors.grayColor01,
    borderTopWidth: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    height: height * 0.1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: fonts.fontRegular,
    fontSize: 12,
    fontWeight: '600',
    color: colors.grayColor02,
  },
  subtitle: {
    fontFamily: fonts.fontBold,
    fontSize: 16,
    fontWeight: '600',
    color: colors.primaryColor,
  },
});

export default styles;
