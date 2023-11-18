import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IRoom} from '../../models/Room';
import styles from './styles';
import RoomHeader from './RoomHeader';
import {Dimensions} from 'react-native';
import {colors, fonts} from '../../../app.json';
import {avatars, objectsPaths, objectsPosition} from '../../utils/assets';
import {useEffect, useState} from 'react';
import Button from '../Button';
import Controls from './Controls';
import {
  IUserOnMeet,
  createPeerConnectionContext,
} from '../../services/WebSocketService';
import {store} from '../../store';

const {height, width} = Dimensions.get('screen');

const Room = (props: {room: IRoom}) => {
  const [enabledRoom, setEnabledRoom] = useState<boolean>(false);
  const [enabledMute, setEnabledMute] = useState<boolean>(false);
  const [users, setUsers] = useState<IUserOnMeet[]>([]);
  const [me, setMe] = useState<IUserOnMeet>();
  const wsServices = createPeerConnectionContext();
  const cellSize = Math.min(width, height) / 8;

  useEffect(() => {
    if (users && me) {
      console.log('users', users);
      console.log('me', me);
    }
  }, [users, me]);

  const join = () => {
    const userId = store.getState().user.id;
    const link = props.room.link;
    wsServices.joinRoom({userId, link});
    wsServices.onUpdateUserList((usersList: IUserOnMeet[]) => {
      if (usersList) {
        setUsers(usersList);
        const me = usersList.find(
          user => user.user === store.getState().user.id,
        );
        setMe(me);
      }
    });
    setEnabledRoom(true);
  };

  const toggleMute = () => {
    setEnabledMute(!enabledMute);
  };

  const onChangeControls = (command: string) => {
    switch (command) {
      case 'TOP':
        console.log('TOP');
        break;
      case 'DOWN':
        console.log('DOWN');
        break;
      case 'LEFT':
        console.log('LEFT');
        break;
      case 'RIGHT':
        console.log('RIGHT');
        break;
      default:
        break;
    }
  };

  const RenderRoom = () => {
    return (
      <View style={styles.roomContainer}>
        <View style={styles.row}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(x => (
            <View key={x} style={{width: cellSize, height: cellSize}}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map(y => (
                <View
                  key={y}
                  style={{
                    width: cellSize,
                    height: cellSize,
                    borderColor: colors.grayColor02,
                    borderWidth: 0.5,
                  }}>
                  {props
                    .room!!.objects!!.filter(img => img.x === x && img.y === y)
                    .map(object => (
                      <Image
                        style={{
                          position: 'absolute',
                          transform: objectsPosition[object.name].scale,
                          left: objectsPosition[object.name].left,
                          top: objectsPosition[object.name].top,
                          zIndex: object.zIndex,
                        }}
                        key={object._id}
                        source={
                          objectsPaths[
                            object.orientation
                              ? `${object.name}_${object.orientation}`
                              : object.name
                          ]
                        }
                      />
                    ))}
                  {users
                    ?.filter(user => user.x === x && user.y === y)
                    .map(user => (
                      <Image
                        style={{
                          position: 'absolute',
                          transform: objectsPosition['avatar'].scale,
                          left: objectsPosition['avatar'].left,
                          top: objectsPosition['avatar'].top,
                          zIndex: 999,
                        }}
                        key={user._id}
                        source={
                          avatars[ `${user.avatar}_${user.orientation}`]
                        }
                      />
                    ))}
                </View>
              ))}
            </View>
          ))}
        </View>
        {!enabledRoom ? (
          <View style={styles.containerPreview}>
            <View style={styles.containerButton}>
              <Image
                style={styles.door}
                source={require('../../assets/images/meetEnter.png')}
              />
              <Button
                placeholder="Entrar na sala"
                onPress={() => join()}
                style={styles.button}
                loading={enabledRoom}
              />
            </View>
          </View>
        ) : (
          <View style={styles.muteContainer}>
            <TouchableOpacity onPress={() => toggleMute()} style={styles.mute}>
              <Image
                source={
                  enabledMute
                    ? require('../../assets/images/muteOn.png')
                    : require('../../assets/images/muteOff.png')
                }
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.bg}
      source={require('../../assets/images/background.png')}
      resizeMode="cover">
      {props.room.objects.length > 0 ? (
        <>
          <RoomHeader room={props.room} />
          {RenderRoom()}
          {enabledRoom && <Controls onChange={onChangeControls} />}
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <View style={styles.empty}>
            <Image source={require('../../assets/images/empty.png')} />
            <Text style={styles.textEmpty}>Reunião não encontrada :/</Text>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default Room;
