import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerTextModal: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    marginHorizontal: 14,
  },
  titleModal: {
    color: colors.primaryColor,
    fontSize: 19,
    fontFamily: fonts.fontBold,
  },
  containerMessages: {
    marginTop: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageModal: {
    color: colors.grayColor02,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: fonts.fontRegular,
    textAlign: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    marginTop: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cancelButton: {
    color: colors.primaryColor,
    fontFamily: fonts.fontBold,
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.165,
    textDecorationLine: 'underline',
    margin: width * 0.04,
  },
});

export default styles;
