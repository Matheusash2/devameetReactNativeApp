import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {},
  button: {
    marginLeft: width * 0.02,
  },
});
export default styles;
