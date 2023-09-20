import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export const createUser = (email: string, password: string) => {
  const navigation = useNavigation();

  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('Esse email já está em uso');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('Email inválido');
      }

      console.error(error);
    });
};
