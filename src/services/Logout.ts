import React from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Logout = () => {
  auth()
    .signOut()
    .then(async () => {
      await GoogleSignin.revokeAccess();
    });
};

export default Logout;
