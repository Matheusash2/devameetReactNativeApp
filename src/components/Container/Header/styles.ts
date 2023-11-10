import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    borderBottomColor: colors.grayColor01,
    borderBottomWidth: 1,
    height: 60,
    justifyContent: 'center',
  },
  logo: {},
  containerDefault: {
    alignItems: 'center',
  },
  containerEditProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.04,
  },
  editProfileTitle: {
    color: colors.grayColor00,
    fontFamily: fonts.fontBold,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.16
  },
  confirmButton: {
    color: colors.primaryColor,
    fontFamily: fonts.fontBold,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.16
  },
  cancelButton: {
    color: colors.grayColor03,
    fontFamily: fonts.fontRegular,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.16
  }
});

export default styles;
