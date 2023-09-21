import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const SignIn = async (email: string, password: string) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const uid = userCredential.user.uid;
      return uid;
    })
    .catch((error) => {
      const erroCode = `auth/${error.code.split('/')[1]}`;

      switch (erroCode) {
        case 'auth/user-not-found':
          Alert.alert('Erro de Login', 'Usuário não encontrado. Verifique o email.');
          break;
        case 'auth/invalid-login':
          Alert.alert('Erro de Login', 'Email e/ou Senha incorretos.');
          break;
        case 'auth/too-many-requests':
          Alert.alert('Erro de Login', 'Muitas tentativas de login. Tente novamente mais tarde.');
          break;
        default:
          Alert.alert('Erro de Login', 'Ocorreu um erro desconhecido. Tente novamente.');
      }
      throw error; // Lança o erro novamente se necessário
    });
};
export default SignIn;
