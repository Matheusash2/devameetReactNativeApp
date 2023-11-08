import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 95,
  },
  edit: {
    position: 'relative',
    bottom: 40,
    left: 40,
  },
  imageWithBorder: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.primaryColor,
    borderStyle: 'solid',
    backgroundColor: colors.primaryColorWithOpacity,
  },
});

export default styles;
