import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {IAvater} from './types';
import {avatars} from '../../utils/assets';
import ModalSelectAvatar from '../ModalSelectAvatar';
import {useState} from 'react';

const Avatar = (props: IAvater) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View>
      <ModalSelectAvatar
        modalVisible={modalVisible}
        onChange={avatar => props.onChange && props.onChange(avatar)}
        currentAvatar={props.avatar}
        setModalVisible={setModalVisible}
      />
      <TouchableOpacity
        onPress={() => props.onChange && setModalVisible(!modalVisible)}
        style={styles.imageContainer}>
        <Image
          style={[props.avatar ? styles.imageWithBorder : null, props.style]}
          source={
            props.avatar
              ? avatars[`${props.avatar}_front`]
              : require('../../assets/images/avatar.png')
          }
        />
        {props.onChange && (
          <View style={styles.edit}>
            <Image source={require('../../assets/images/editAvatar.png')} />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;
