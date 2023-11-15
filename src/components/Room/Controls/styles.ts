import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.04,
    width: width * 0.23,
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
    padding: 25,
    shadowColor: colors.blackWithOpacity,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 2.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default styles;
