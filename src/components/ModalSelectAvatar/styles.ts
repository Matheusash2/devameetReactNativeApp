import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  modalView: {
    width: width * 0.9,
    height: height * 0.65,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontFamily: fonts.fontRegular,
    fontWeight: '600',
    color: colors.grayColor02,
  },
  subTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontFamily: fonts.fontBold,
    fontWeight: '600',
    color: colors.primaryColor
  },
  containerAvatars: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.grayColor01
  },
  avatarFrame: {
    backgroundColor: colors.primaryColorWithOpacity,
    margin: 5,
    borderRadius: 8,
    padding: 7.9,
    paddingVertical: 1,
  },
  avatar: {
    width: width * 0.18,
    height: height * 0.12
  },
  selectAvatar: {
    borderColor: colors.primaryColor,
    borderWidth: 2,
    borderStyle: 'solid'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  buttonClose: {
    fontSize: 17,
    fontFamily: fonts.fontBold,
    fontWeight: '600',
    color: colors.primaryColor,
    textDecorationLine: 'underline',
  }
});

export default styles;