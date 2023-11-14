import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.grayColor01,
    borderBottomWidth: 1,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    height: height * 0.1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.fontBold,
    fontSize: 12,
    fontWeight: '600',
    color: colors.grayColor03,
    marginRight: width*0.01
  },
  link: {
    fontFamily: fonts.fontRegular,
    fontSize: 12,
    fontWeight: '400',
    color: colors.grayColor03,
    marginRight: width*0.01
  },
  copy: {
    marginLeft: 0
  },
  subtitle: {
    fontFamily: fonts.fontBold,
    fontSize: 16,
    fontWeight: '600',
    color: colors.greenColor,
  },
});

export default styles;
