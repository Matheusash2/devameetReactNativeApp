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
  IMove,
  IUserOnMeet,
  createPeerConnectionContext,
} from '../../services/WebSocketService';
import {store} from '../../store';

const {height, width} = Dimensions.get('screen');

const Room = (props: {room: IRoom}) => {
  const [enabledRoom, setEnabledRoom] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [users, setUsers] = useState<IUserOnMeet[]>([]);
  const [me, setMe] = useState<IUserOnMeet>();
  const [ws, setWs] = useState<any>();
  const cellSize = Math.min(width, height) / 8;

  const join = () => {
    const wsServices = createPeerConnectionContext();
    setWs(wsServices);
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
    ws.updateToggleMute(!isMute);
    setIsMute(!isMute);
  };

  const onChangeControls = (command: string) => {
    let data: IMove = {};

    switch (command) {
      case 'TOP':
        data.x = me!!.x;
        data.orientation = 'back';
        if (me?.orientation == 'back') {
          data.y = me.y > 1 ? me.y - 1 : 1;
        } else {
          data.y = me!!.y;
        }
        break;
      case 'DOWN':
        data.x = me!!.x;
        data.orientation = 'front';
        if (me?.orientation == 'front') {
          data.y = me.y < 7 ? me.y + 1 : 7;
        } else {
          data.y = me!!.y;
        }
        break;
      case 'LEFT':
        data.y = me!!.y;
        data.orientation = 'left';
        if (me?.orientation == 'left') {
          data.x = me.x > 0 ? me.x - 1 : 0;
        } else {
          data.x = me!!.x;
        }
        break;
      case 'RIGHT':
        data.y = me!!.y;
        data.orientation = 'right';
        if (me?.orientation == 'right') {
          data.x = me.x < 7 ? me.x + 1 : 7;
        } else {
          data.x = me!!.x;
        }
        break;
    }

    ws.updateUserMoviment(data);
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
                      <View key={user._id} style={styles.avatarContainer}>
                        <View style={styles.avatarNameContainer}>
                          <Text style={styles.avatarName}>{user.name}</Text>
                        </View>
                        <Image
                          style={{
                            position: 'absolute',
                            transform: objectsPosition['avatar'].scale,
                            left: objectsPosition['avatar'].left,
                            top: objectsPosition['avatar'].top,
                            zIndex: 999,
                          }}
                          source={avatars[`${user.avatar}_${user.orientation}`]}
                        />
                      </View>
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
                  isMute
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
