import database from '@react-native-firebase/database';
import { User } from '../../Model/User';

function CreateUserInfo({ id, email, name, avatar }: User) {
  database()
    .ref(`/users/${id}`)
    .set({
      name,
      email,
      avatar,
    })
    .then(() => {
      console.log('Data set');
    });
}

export default CreateUserInfo;
