import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import {IModalSelectAvatar} from './types';
import Button from '../Button';
import {avatars} from '../../utils/assets';
import defaultStyles from '../../communStyles';
import styles from './styles';
import {useState} from 'react';

const ModalSelectAvatar = (props: IModalSelectAvatar) => {
  const [avatarSelected, setAvatarSelected] = useState<string | undefined>(
    props.currentAvatar,
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      <View style={defaultStyles.containerBackground}>
        <View style={[defaultStyles.containerModal, styles.modalView]}>
          <Text style={styles.title}>Avatar</Text>
          <Text style={styles.subTitle}>Selecione seu avatar</Text>
          <View style={styles.containerAvatars}>
            {Object.keys(avatars)
              .filter(avatar => avatar.includes('_front'))
              .map(key => (
                <TouchableOpacity
                  key={key}
                  onPress={() => setAvatarSelected(key.replace('_front', ''))}
                  style={[
                    styles.avatarFrame,
                    key.replace('_front', '') == avatarSelected
                      ? styles.selectAvatar
                      : null,
                  ]}>
                  <Image style={styles.avatar} source={avatars[key]} />
                </TouchableOpacity>
              ))}
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={() => props.setModalVisible(false)}>
              <Text style={styles.buttonClose}>Voltar</Text>
            </TouchableOpacity>
            <Button
              placeholder="Salvar"
              onPress={() => {
                props.onChange(avatarSelected!!);
                props.setModalVisible(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSelectAvatar;
