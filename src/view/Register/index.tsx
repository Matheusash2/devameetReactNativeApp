import {Text, TouchableOpacity, View} from 'react-native';
import Input from '../../components/Input';
import {useEffect, useState} from 'react';
import Button from '../../components/Button';
import styles from './styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/RootStackParams';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../../components/Avatar';
import {
  formIsComplete,
  validateConfirmPassword,
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/validations';
import defaultStyles from '../../communStyles';
import {IRegister} from '../../models/Auth';
import {register} from '../../services/AuthService';
import * as AuthService from '../../services/AuthService';
import handleMessage from '../../utils/message';

const Register = () => {
  type navigationTypes = NativeStackNavigationProp<
    RootStackParamList,
    'Register'
  >;
  const navigation = useNavigation<navigationTypes>();
  const [avatar, setAvatar] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmaPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  useEffect(() => {
    validateForm();
  }, [name, email, password, confirmPassword]);

  const validateForm = () => {
    const nameIsValid = validateName(name);
    const emailIsValid = validateEmail(email);
    const passworIsValid = validatePassword(password);
    const confirmPasswordIsValid = validateConfirmPassword(
      password,
      confirmPassword,
    );
    const isComplete = formIsComplete(name, email, password, confirmPassword);
    let error = '';

    if (!nameIsValid) {
      error = 'Nome inválido';
    } else if (!emailIsValid) {
      error = 'Email inválido';
    } else if (!passworIsValid) {
      error =
        'Senha inválida. Deve ter de 4 a 12 caracteres e incluir pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial (!@#$%^&*)';
    } else if (!confirmPasswordIsValid) {
      error = 'Confirmação de senha não confere';
    }
    setError(error);
    setFormIsValid(error == '' && isComplete);
  };

  const onRegister = async () => {
    try {
      setLoading(true);
      const body: IRegister = {
        avatar: avatar,
        name: name,
        email: email,
        password: password,
      };
      await AuthService.register(body);
      handleMessage({
        isOpen: true,
        title: 'Tudo Certo!',
        messages: ['Cadastro efetuado com sucesso!'],
        action: async () => {
          await AuthService.login({login: email, password: password});
          handleMessage({isOpen: false});
          navigation.navigate('Home');
        },
      });
    } catch (error: any) {
      console.log('erro', error.response.data);
      handleMessage({
        isOpen: true,
        title: 'Register Error!',
        messages: [
          'Erro ao efetuar cadastro',
          'Tente novamente',
          typeof error.response.data.message == 'string'
            ? error.response.data.message
            : error.response.data.message[0],
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Avatar onChange={avatar => setAvatar(avatar)} avatar={avatar} />
      {error != '' && (
        <Text style={[defaultStyles.textError, styles.error]}>{error}</Text>
      )}
      <Input
        placeholder="Nome completo"
        value={name}
        onChange={value => setName(value)}
        icon={require('../../assets/images/user.png')}
        style={styles.inputTop}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={value => setEmail(value)}
        icon={require('../../assets/images/envelope.png')}
        style={styles.inputMargin}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChange={value => setPassword(value)}
        icon={require('../../assets/images/key.png')}
        segureTextEntry={true}
        style={styles.inputMargin}
      />
      <Input
        placeholder="Confirmar senha"
        value={confirmPassword}
        onChange={value => setConfirmaPassword(value)}
        icon={require('../../assets/images/key.png')}
        segureTextEntry={true}
        style={styles.inputMargin}
      />
      <Button
        placeholder="Cadastrar"
        onPress={() => onRegister()}
        loading={loading}
        style={styles.button}
        disabled={!formIsValid}
      />
      <View style={styles.containerSignIn}>
        <Text style={styles.textSignIn}>Já possui uma conta?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.textSignInLink}>Faça seu login agora!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
