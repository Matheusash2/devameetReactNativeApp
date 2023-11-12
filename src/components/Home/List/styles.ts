import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  containerEmpty: {
    alignItems: 'center',
    paddingVertical: height * 0.2,
  },
  textEmpty: {
    fontFamily: fonts.fontBold,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.14,
    color: colors.grayColor02
  },
});

export default styles;
