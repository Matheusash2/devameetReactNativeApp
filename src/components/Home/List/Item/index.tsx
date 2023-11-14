import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import {IMeet} from '../../../../models/Meet';
import Copy from '../../../Copy';

const Item = (props: {item: IMeet; delete: () => void}) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationTypes>();

  return (
    <View style={styles.container}>
      <View style={[styles.color, {backgroundColor: props.item.color}]}></View>
      <Text style={styles.title}>{props.item.name}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Meet', {meet: props.item})}>
          <Image
            style={styles.button}
            source={require('../../../../assets/images/meetIcon.png')}
          />
        </TouchableOpacity>
        <Copy link={props.item.link} />
        <TouchableOpacity onPress={() => props.delete()}>
          <Image
            style={styles.button}
            source={require('../../../../assets/images/trash.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
