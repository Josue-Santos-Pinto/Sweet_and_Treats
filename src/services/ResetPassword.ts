import auth from '@react-native-firebase/auth';

const ResetPassword = (email: string) => {
  return auth().sendPasswordResetEmail(email);
};
export default ResetPassword;
