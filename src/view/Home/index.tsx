import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import Container from '../../components/Container';
import MeetingHeader from '../../components/Home/MeetingHeader';
import List from '../../components/Home/List';

const Home = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationTypes>();
  return (
    <Container currentTab='Home'>
      <View>
        <MeetingHeader title='Minhas reuniões'/>
        <List />
      </View>
    </Container>
  );
};

export default Home;
