import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    flex: 1,
    alignItems: 'center',
  },
  containerInfo: {
    marginBottom: height * 0.4,
    borderBottomColor: colors.grayColor01,
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  containerImage: {
    marginTop: height * 0.04,
    alignItems: 'center',
  },
  textUpdateAvatar: {
    color: colors.primaryColor,
    textDecorationLine: 'underline',
    fontFamily: fonts.fontRegular,
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 16,
    marginVertical: 16
  },
  avatar: {
    width: 90,
    height: 90
  },
  containerEditName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: colors.grayColor01,
    borderTopWidth: 0.5,
  },
  textName: {
    fontFamily: fonts.fontRegular,
    fontSize: 14,
    color: colors.grayColor03,
    marginLeft: 16
  },
  input: {
    borderBottomWidth: 0,
    marginLeft: 16,
    marginRight: 0
  },
  clear: {
    marginRight: 16,
  },
  conatinerLogout: {
    marginTop: 20
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogout: {
    fontFamily: fonts.fontRegular,
    fontSize: 12,
    color: colors.primaryColor,
    fontWeight: '500',
    marginLeft: 8
  },
});

export default styles;
