import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export const Logout = () => {
  const navigation = useNavigation();

  auth()
    .signOut()
    .then(() => navigation.reset({ index: 1, routes: [{ name: 'Login' }] }));
};
