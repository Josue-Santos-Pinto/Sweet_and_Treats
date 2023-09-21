import React from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  auth()
    .signOut()
    .then(() => {
      return true;
    });
};

export default Logout;
