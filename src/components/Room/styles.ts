import {Dimensions, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../app.json';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  bg: {
    height: height * 0.8,
  },
  roomContainer: {
    position: 'relative',
    marginBottom: height * 0.03,
    flex: 1
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  containerPreview: {
    flex: 1,
    backgroundColor: colors.grayColor00WithOpacity75,
    zIndex: 100,
    height: height * 0.46,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  door: {
    marginBottom: 16
  },
  button: {
    backgroundColor: 'transparent',
    borderColor: colors.whiteColor,
    borderWidth: 2,
    borderRadius: 10,
    minHeight: height * 0.04,
    width: width * 0.38,
    padding: 6
  },
});

export default styles;
