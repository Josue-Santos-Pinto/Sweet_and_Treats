import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';

const GetCurrentUserInfo = async (id: string) => {
  return database()
    .ref(`/users/${id}`)
    .once('value')
    .then((snapshot) => {
      const userInfo = snapshot.val();
      return userInfo;
    });
};

export default GetCurrentUserInfo;
