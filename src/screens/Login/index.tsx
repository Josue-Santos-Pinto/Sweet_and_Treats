import React, { useEffect, useState } from 'react';
import {
  Container,
  FormArea,
  Input,
  InputArea,
  ModalBody,
  PasswordForgotButton,
  PasswordForgotText,
  TextError,
} from './styles';
import { useForm, Controller } from 'react-hook-form';

import AuthHeader from '../../components/AuthHeader';
import Button from '../../components/Button';
import AuthOptions from '../../components/AuthOptions';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SwitchLoginRegister from '../../components/SwitchLoginRegister';
import { useNavigation } from '@react-navigation/native';
import SlashedOr from '../../components/SlashedOr';
import SignIn from '../../services/Auth/SignIn';
import onGoogleButtonPress from '../../services/Auth/SignInWithGoogle';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { WEB_CLIENT_ID } from '../../helpers';
import ResetPassword from '../../services/Auth/ResetPassword';
import { Alert, Modal } from 'react-native';
import CloseButton from '../../components/CloseButton';
import { MainStyles } from '../../theme/MainStyles';
import { useDispatch } from 'react-redux';
import { setAvatar, setEmail, setID, setName } from '../../redux/reducers/userReducer';
import auth from '@react-native-firebase/auth';
import CreateUserInfo from '../../services/DB/CreateUserInfo';
type FormDataProps = {
  email: string;
  password: string;
};

const LoginSchema = yup.object({
  email: yup.string().required('Informe o email').email('Email invalido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve conter de 6 a 12 caracteres')
    .max(12, 'A senha deve conter de 6 a 12 caracteres'),
});

export default function Login() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(LoginSchema),
  });

  async function handleLogin(data: FormDataProps) {
    SignIn(data.email, data.password)
      .then((uid) => {
        console.log(uid);
        if (uid) {
          dispatch(setID(uid));

          navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Container>
      <AuthHeader />

      <FormArea>
        <InputArea>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Email"
                onChangeText={onChange}
                maxLength={30}
                placeholderTextColor={MainStyles.text.color.placeholders}
                hasError={errors.email?.message}
                keyboardType="email-address"
              />
            )}
          />
          {errors.email?.message && <TextError>{errors.email?.message}</TextError>}
        </InputArea>

        <InputArea>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Senha"
                placeholderTextColor={MainStyles.text.color.placeholders}
                onChangeText={onChange}
                maxLength={12}
                secureTextEntry
                hasError={errors.password?.message}
              />
            )}
          />
          {errors.password?.message && <TextError>{errors.password?.message}</TextError>}

          <PasswordForgotButton onPress={() => setModalVisible(true)}>
            <PasswordForgotText>Esqueci minha senha</PasswordForgotText>
          </PasswordForgotButton>
        </InputArea>

        <Button title="Login" onPress={handleSubmit(handleLogin)} />
        <SlashedOr />
        <AuthOptions
          onPress={() =>
            onGoogleButtonPress().then(async () => {
              const user = auth().currentUser;

              if (user) {
                CreateUserInfo({
                  id: user.uid,
                  email: user.email,
                  name: user.displayName,
                  avatar: user.photoURL,
                });
                dispatch(setID(user.uid));
                dispatch(setEmail(user.email));
                if (user.displayName) dispatch(setName(user.displayName));
                if (user.photoURL) dispatch(setAvatar(user.photoURL));
              }

              navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
            })
          }
        />
        <SwitchLoginRegister
          phrase="Não possui uma conta?"
          buttonText="Criar Conta"
          onPress={async () => navigation.navigate('Register')}
        />
      </FormArea>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <ModalBody>
          <CloseButton onPress={() => setModalVisible(false)} />
          <Input
            placeholder="Email"
            placeholderTextColor={MainStyles.text.color.placeholders}
            onChangeText={(e: string) => setResetEmail(e)}
            maxLength={30}
            keyboardType="email-address"
          />
          <Button title="Resetar Senha" onPress={() => ResetPassword(resetEmail)} />
        </ModalBody>
      </Modal>
    </Container>
  );
}
