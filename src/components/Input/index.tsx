import {Image, Text, TextInput, View} from 'react-native';
import {IInput} from './types';
import styles from './styles';

const Input = (props: IInput) => {
  return (
    <View style={[styles.containerInput, props.style]}>
      {props.icon && <Image source={props.icon} style={styles.icon} />}
      <TextInput
        value={props.value}
        onChangeText={props.onChange}
        style={[
          styles.inputText,
          props.value ? styles.textChange : null,
        ]}
        placeholder={props.placeholder}
        secureTextEntry={props.segureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;
