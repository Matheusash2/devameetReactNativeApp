import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
} from 'react-native';
import styles from './styles';
import {IButton} from './types';
import {colors} from '../../../app.json';

const Button = (props: IButton) => {
  return (
    <TouchableOpacity
      style={[
        styles.containerButton,
        props.style,
        props.disabled ? styles.buttonDisabled : null,
      ]}
      onPress={props.onPress}
      disabled={props.disabled}>
      {props.loading ? (
        <ActivityIndicator size={30} color={colors.whiteColor} />
      ) : (
        <>
          <Text style={styles.textButton}>{props.placeholder}</Text>
         {props.icon && <Image source={props.icon} style={props.style}/>}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
