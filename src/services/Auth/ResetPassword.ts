import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const ResetPassword = (email: string) => {
  if (email.trim() == '') {
    Alert.alert('Erro de Email', 'Digite um email válido.');
  } else {
    return auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Redefinição de Senha',
          `Um email foi enviado para ${email} para redefinição de senha.`
        );
      })
      .catch((error) => {
        const erroCode = `auth/${error.code.split('/')[1]}`;
        console.log(erroCode);

        switch (erroCode) {
          case 'auth/user-not-found':
            Alert.alert('Erro de Email', 'Usuário não encontrado. Verifique o email.');
            break;
          case 'auth/invalid-email':
            Alert.alert('Erro de Email', 'Email invalido.');
            break;
          default:
            Alert.alert('Erro de Email', 'Ocorreu um erro desconhecido. Tente novamente.');
        }
      });
  }
};

export default ResetPassword;
