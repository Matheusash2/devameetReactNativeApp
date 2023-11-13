import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';
import handleMessage from '../../../../utils/message';
import { IMeet } from '../../../../models/Meet';

const Item = (props: {item: IMeet, delete: () => void;}) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationTypes>();

  const copy = () => {
    Clipboard.setString(props.item.link)
    handleMessage({
        isOpen: true,
        title: 'Aviso!',
        messages: ['Link copiado com sucesso']
    })
  }

  return (
    <View style={styles.container}>
      <View style={[styles.color, {backgroundColor: props.item.color}]}></View>
      <Text style={styles.title}>{props.item.name}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Meet', {meet: props.item})} style={styles.button}>
          <Image source={require('../../../../assets/images/meetIcon.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => copy()} style={styles.button}>
          <Image source={require('../../../../assets/images/copy.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.delete()} style={styles.button}>
          <Image source={require('../../../../assets/images/trash.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
