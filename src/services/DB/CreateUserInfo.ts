import React, { useEffect } from 'react';
import database from '@react-native-firebase/database';
import { User } from '../../Model/User';
import { useDispatch } from 'react-redux';
import { setAvatar, setEmail, setID, setName } from '../../redux/reducers/userReducer';

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
