import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.06,
    alignItems: 'center',
  },
  button: {
    marginTop: height * 0.06,
    width: width * 0.81,
  },
});

export default styles;
