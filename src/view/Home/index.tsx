import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/Container';

const Home = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationTypes>;
  return (
    <Container currentTab='Home'>
      <View>
        <Text>Teste da home</Text>
      </View>
    </Container>
  );
};

export default Home;
