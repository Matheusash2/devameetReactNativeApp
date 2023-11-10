import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {IHeader} from './types';

const Header = (props: IHeader) => {
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
          <TouchableOpacity>
            <Text style={styles.cancelButton}>Cancelar</Text>
          </TouchableOpacity>
          <Text style={styles.editProfileTitle}>Editar perfil</Text>
          <TouchableOpacity>
            <Text style={styles.confirmButton}>Concluir</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Header;
