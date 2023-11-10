import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height: height * 0.05,
    backgroundColor: colors.lightBlueColor,
    borderTopColor: colors.primaryColor,
    borderTopWidth: 0.5,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: width *0.04
  },
  iconEditProfile:{
    height: height * 0.04,
    width: width * 0.08,
    borderRadius: 100,
    borderColor: colors.grayColor03,
    borderWidth: 2
  },
  active:{
    borderColor: colors.primaryColor,
  },
});

export default styles;