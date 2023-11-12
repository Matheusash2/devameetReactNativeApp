import {Text, View} from 'react-native';
import {IMeetingHeader} from './types';
import {store} from '../../../store';
import styles from './styles';

const MeetingHeader = (props: IMeetingHeader) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{props.title}</Text>
      {store.getState().user!! && (
        <Text style={styles.subtitle}>{`Olá, ${
          store.getState().user.name
        }`}</Text>
      )}
    </View>
  );
};

export default MeetingHeader;
