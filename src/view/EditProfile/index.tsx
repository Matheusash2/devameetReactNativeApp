import {Image, Text, TouchableOpacity, View} from 'react-native';
import Container from '../../components/Container';
import Avatar from '../../components/Avatar';
import Input from '../../components/Input';
import React, {useState} from 'react';
import styles from './styles';
import {store} from '../../store';
import ModalSelectAvatar from '../../components/ModalSelectAvatar';
import {logout} from '../../services/AuthService';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import handleMessage from '../../utils/message';
import * as UserService from '../../services/UserService/';
import {IUpdateUser} from '../../models/User';

const EditProfile = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamList,
    'EditProfile'
  >;
  const navigation = useNavigation<navigationTypes>();
  const [name, setName] = useState<string>(store.getState().user.name);
  const [avatar, setAvatar] = useState<string>(store.getState().user.avatar);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const submit = async () => {
    try {
      if (!name) {
        handleMessage({
          isOpen: true,
          title: 'Aviso',
          messages: ['O nome é obrigatório!'],
        });
        return;
      }
      const body: IUpdateUser = {
        name,
        avatar,
      };
      await UserService.update(body);
      handleMessage({
        isOpen: true,
        title: 'Sucesso!',
        messages: ['Dados atualizados com sucesso!'],
      });
      console.log('Success update ', body);
    } catch (error: any) {
      console.log('Erro no update', error);
      handleMessage({
        isOpen: true,
        title: 'Updating Error!',
        messages: [
          'Erro ao efetuar atualização',
          'Tente novamente',
          typeof error.response.data.message == 'string'
            ? error.response.data.message
            : error.response.data.message[0],
        ],
      });
    }
  };

  const onLogout = () => {
    logout();
    navigation.navigate('Login');
  };
  return (
    <Container currentTab="EditProfile" submit={submit}>
      <View style={styles.container}>
        <View style={styles.containerInfo}>
          <View style={styles.containerImage}>
            <ModalSelectAvatar
              modalVisible={modalVisible}
              onChange={avatar => setAvatar(avatar)}
              currentAvatar={avatar}
              setModalVisible={setModalVisible}
            />
            <Avatar style={styles.avatar} avatar={avatar} />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.textUpdateAvatar}>Alterar avatar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerEditName}>
            <Text style={styles.textName}>Nome</Text>
            <Input
              placeholder="Digite um nome"
              value={name}
              onChange={value => setName(value)}
              style={styles.input}
            />
            <TouchableOpacity style={styles.clear} onPress={() => setName('')}>
              <Image source={require('../../assets/images/clear.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.conatinerLogout}>
          <TouchableOpacity style={styles.logout} onPress={() => onLogout()}>
            <Image source={require('../../assets/images/logout.png')} />
            <Text style={styles.textLogout}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default EditProfile;
