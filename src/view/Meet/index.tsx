import {Text, View} from 'react-native';
import Container from '../../components/Container';
import {useCallback, useEffect, useState} from 'react';
import {IRoom} from '../../models/Room';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import * as RoomService from '../../services/RoomService';
import handleMessage from '../../utils/message';
import SearchRoom from '../../components/SearchRoom';
import Room from '../../components/Room';

const Meet = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Meet'>;
  const navigation = useNavigation<navigationTypes>();
  const meetData = navigation
    .getState()
    .routes.find((route: any) => route.name == 'Meet')?.params;
  const [currentRoom, setCurrentRoom] = useState<IRoom>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (meetData) {
      onSearch(meetData.meet!!.link);
    }
  }, []);

  const onSearch = useCallback(async (link: string) => {
    try {
      setLoading(true);
      const room = await RoomService.getRoom(link);
      setCurrentRoom(room);
    } catch (error: any) {
      console.log('Erro ao buscar room ', error);
      handleMessage({
        isOpen: true,
        title: 'Erro!',
        messages: [
          'Erro ao buscar sala de reunião',
          'tente novamente',
          typeof error.response.data.message == 'string'
            ? error.response.data.message
            : error.response.data.message[0],
        ],
      });
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <Container currentTab="Meet">
      <View>
        {currentRoom ? (
          <Room room={currentRoom}/>
        ) : (
          <SearchRoom onSearch={onSearch} loading={loading} />
        )}
      </View>
    </Container>
  );
};

export default Meet;
