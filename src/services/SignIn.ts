import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

export const SignIn = (email: string, password: string) => {
  const navigation = useNavigation();

  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        console.log('Email inválido');
      }

      Alert.alert(error);
    });
};
