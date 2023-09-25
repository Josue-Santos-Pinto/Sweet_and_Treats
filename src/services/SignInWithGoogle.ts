import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '../helpers';
import { Alert } from 'react-native';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
  accountName: '',
});

async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
      Alert.alert('Erro de Login', 'Ocorreu um erro desconhecido. Tente novamente.');
    }
  }
}
export default onGoogleButtonPress;
