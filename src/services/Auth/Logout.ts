import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Logout = async (isGoogleProvider: boolean) => {
  console.log(isGoogleProvider);
  if (isGoogleProvider) {
    await GoogleSignin.signOut();
  } else {
    auth()
      .signOut()
      .then(() => {
        console.log('Logout');
      });
  }
};

export default Logout;
