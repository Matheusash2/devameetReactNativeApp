import {Text, View} from 'react-native';
import {ISearhRoom} from './types';
import MeetingHeader from '../Home/MeetingHeader';
import Input from '../Input';
import {useState} from 'react';
import Button from '../Button';
import styles from './styles';

const SearchRoom = (props: ISearhRoom) => {
  const [link, setLink] = useState<string>('');
  return (
    <View>
      <MeetingHeader title="Reunião" />
      <View style={styles.container}>
        <Input
          placeholder="Informe o link da reunião para entrar"
          onChange={setLink}
          value={link}
          icon={require('../../assets/images/link.png')}
        />
        <Button
          placeholder="Entrar"
          onPress={() => props.onSearch(link)}
          disabled={!link}
          loading={props.loading}
          style={styles.button}
        />
      </View>
    </View>
  );
};

export default SearchRoom;
