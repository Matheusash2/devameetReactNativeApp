import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {IRoom} from '../../../models/Room';
import Copy from '../../Copy';

const RoomHeader = (props: {room: IRoom}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.row}>
        <Text style={styles.title}>Reunião</Text>
        <Text style={styles.link}>{props.room.link}</Text>
        <Copy link={props.room.link} style={styles.copy} colorIcon={props.room.color}/>
      </View>
      <Text style={[styles.subtitle, {color: props.room.color}]}>{props.room.name}</Text>
    </View>
  );
};

export default RoomHeader;
