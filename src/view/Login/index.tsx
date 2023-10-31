import {useEffect} from 'react';
import {Text, View} from 'react-native';
import handleMessage from '../../utils/message';

const Login = () => {
  useEffect(() => {
    handleMessage({
      title: 'Deletar Reunião',
      messages: [
        'Deseja deletar a reunião?',
        'Essa ação não poderá ser desfeita.',
      ],
      isCancelable: true,
      isOpen: true,
      action: () => console.log('Clicado')
    });
  }, []);
  return (
    <View>
      <Text>Teste de tela de login</Text>
    </View>
  );
};

export default Login;
