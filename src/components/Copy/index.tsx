import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {IMeet} from '../../models/Meet';
import Clipboard from '@react-native-clipboard/clipboard';
import handleMessage from '../../utils/message';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {ICopy} from './types';

const Copy = (props: ICopy) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationTypes>();

  const copy = () => {
    Clipboard.setString(props.link);
    handleMessage({
      isOpen: true,
      title: 'Aviso!',
      messages: ['Link copiado com sucesso'],
    });
  };

  return (
    <TouchableOpacity onPress={() => copy()}>
      <Image
        style={[styles.button, props.style, {tintColor: props.colorIcon}]}
        source={
          props.icon ? props.icon : require('../../assets/images/copy.png')
        }
      />
    </TouchableOpacity>
  );
};

export default Copy;
