import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.grayColor01,
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: width* 0.04,
    paddingVertical: height*0.01,
  },
  color: {
    width: width * 0.02,
    height: height * 0.04,
    borderRadius: 12,
    marginRight: width * 0.02
  },
  title: {
    fontFamily: fonts.fontBold,
    fontSize: 12,
    fontWeight: '700',
    color: colors.grayColor03
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex:1
  },
  button: {
    marginLeft: width * 0.02
  }
});

export default styles;
