import React from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Logout = async (isGoogleProvider: boolean) => {
  if (isGoogleProvider) {
    return await GoogleSignin.revokeAccess();
  } else {
    auth()
      .signOut()
      .then(() => {
        console.log('Logout');
      });
  }
};

export default Logout;
