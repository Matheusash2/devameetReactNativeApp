import {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import handleMessage from '../../utils/message';
import * as AuthService from '../../services/AuthService';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const doLogin = async () => {
    try {
      setLoading(true);
      await AuthService.login({
        login: email,
        password: password,
      });
    } catch (error) {
      console.log(error);
      handleMessage({
        isOpen: true,
        title: 'Login Error',
        messages: ['Erro ao efetuar o login', 'Tente novamente'],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Input
        icon={require('../../assets/images/envelope.png')}
        onChange={value => setEmail(value)}
        placeholder="Email"
        value={email}
      />
      <Input
        icon={require('../../assets/images/key.png')}
        onChange={value => setPassword(value)}
        placeholder="Senha"
        value={password}
        segureTextEntry={true}
        style={styles.inputPassword}
      />
      <Button
        placeholder="Login"
        onPress={() => doLogin()}
        loading={loading}
        disabled={!email && !password}
        style={styles.button}
      />
      <View style={styles.containerSignUp}>
        <Text style={styles.textSignUp}>Não possui uma conta?</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('clicado');
          }}>
          <Text style={styles.textSignUpLink}>Faça seu cadastro agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
