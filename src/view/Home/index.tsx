import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Container/Header';
import Footer from '../../components/Container/Footer';

const Home = () => {
  type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<navigationTypes>;
  return (
    <View style={{flex: 1}}>
      <Header currentTab='Home'/>
      <View style={{flex: 1}}></View>
      <Footer currentTab='Home'/>
    </View>
  );
};

export default Home;
