import {Image, ImageBackground, Text, View} from 'react-native';
import {IRoom} from '../../models/Room';
import styles from './styles';
import RoomHeader from './RoomHeader';
import {Dimensions} from 'react-native';
import {colors, fonts} from '../../../app.json';
import {objectsPaths, objectsPosition} from '../../utils/assets';
import {useState} from 'react';
import Button from '../Button';

const {height, width} = Dimensions.get('screen');

const Room = (props: {room: IRoom}) => {
  const RenderRoom = () => {
    const [enabledRoom, setEnabledRoom] = useState<boolean>(false);
    const cellSize = Math.min(width, height) / 8;

    const onEnter = () => {
      setEnabledRoom(true);
    };

    return (
      <View style={styles.roomContainer}>
        <View style={styles.row}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(y => (
            <View key={y} style={{width: cellSize, height: cellSize}}>
              {[0, 1, 2, 3, 4, 5, 6, 7].map(x => (
                <View
                  key={x}
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
                onPress={() => onEnter()}
                style={styles.button}
                loading={enabledRoom}
              />
            </View>
          </View>
        ) : (
          <View></View>
        )}
      </View>
    );
  };

  return (
    <ImageBackground
      style={styles.bg}
      source={require('../../assets/images/background.png')}
      resizeMode="cover">
      <RoomHeader room={props.room} />
      {RenderRoom()}
    </ImageBackground>
  );
};

export default Room;
