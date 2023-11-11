import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {IHeaderFooter} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';

const Header = (props: IHeaderFooter) => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationTypes>();
  return (
    <View style={styles.container}>
      {props.currentTab != 'EditProfile' ? (
        <View style={styles.containerDefault}>
          <Image
            style={styles.logo}
            source={require('../../../assets/images/logoHeader.png')}
          />
        </View>
      ) : (
        <View style={styles.containerEditProfile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.cancelButton}>Cancelar</Text>
          </TouchableOpacity>
          <Text style={styles.editProfileTitle}>Editar perfil</Text>
          <TouchableOpacity onPress={() => props.submit && props.submit()}>
            <Text style={styles.confirmButton}>Concluir</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
