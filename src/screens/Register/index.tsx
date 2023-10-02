import React from 'react';
import { Alert } from 'react-native';
import { Container, FormArea, Input, InputArea, TextError } from './styles';
import { useForm, Controller } from 'react-hook-form';

import AuthHeader from '../../components/AuthHeader';
import Button from '../../components/Button';
import AuthOptions from '../../components/AuthOptions';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SwitchLoginRegister from '../../components/SwitchLoginRegister';
import { useNavigation } from '@react-navigation/native';
import SlashedOr from '../../components/SlashedOr';
import CreateUser from '../../services/Auth/CreateUser';
import { MainStyles } from '../../theme/MainStyles';
import onGoogleButtonPress from '../../services/Auth/SignInWithGoogle';
import { useDispatch } from 'react-redux';
import { setID } from '../../redux/reducers/userReducer';
import CreateUserInfo from '../../services/DB/CreateUserInfo';
import auth from '@react-native-firebase/auth';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const RegisterSchema = yup.object({
  name: yup
    .string()
    .required('Informe seu nome')
    .min(5, 'O nome deve conter de 5 a 18 caracteres')
    .max(18, 'O nome deve conter de 5 a 18 caracteres'),
  email: yup.string().required('Informe o email').email('Email invalido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'A senha deve conter de 6 a 12 caracteres')
    .max(12, 'A senha deve conter de 6 a 12 caracteres'),
  password_confirm: yup
    .string()
    .required('As senhas precisam ser iguais')
    .oneOf([yup.ref('password')], 'As senhas não são iguais'),
});

export default function Register() {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(RegisterSchema),
  });

  function handleRegister(data: FormDataProps) {
    CreateUser(data.email, data.password)
      .then((uid) => {
        if (uid) {
          CreateUserInfo({ id: uid, name: data.name, email: data.email });
          dispatch(setID(uid));
          navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const navigation = useNavigation();

  return (
    <Container>
      <AuthHeader />

      <FormArea>
        <InputArea>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Nome"
                placeholderTextColor={MainStyles.text.color.placeholders}
                onChangeText={onChange}
                maxLength={18}
                hasError={errors.name?.message}
              />
            )}
          />
          {errors.email?.message && <TextError>{errors.email?.message}</TextError>}
        </InputArea>
        <InputArea>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Email"
                placeholderTextColor={MainStyles.text.color.placeholders}
                onChangeText={onChange}
                maxLength={40}
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
        </InputArea>

        <InputArea>
          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Confirmar Senha"
                placeholderTextColor={MainStyles.text.color.placeholders}
                onChangeText={onChange}
                maxLength={12}
                secureTextEntry
                hasError={errors.password_confirm?.message}
              />
            )}
          />
          {errors.password_confirm?.message && (
            <TextError>{errors.password_confirm?.message}</TextError>
          )}
        </InputArea>

        <Button title="Cadastrar-se" onPress={handleSubmit(handleRegister)} />
        <SlashedOr />
        <AuthOptions
          onPress={() =>
            onGoogleButtonPress().then(async () => {
              const GoogleUser = await GoogleSignin.getCurrentUser();

              if (GoogleUser) {
                const googleCredential = auth.GoogleAuthProvider.credential(GoogleUser.idToken);
                const userCredential = await auth().signInWithCredential(googleCredential);
                const uid = userCredential.user.uid;

                CreateUserInfo({
                  id: uid,
                  email: GoogleUser.user.email,
                  name: GoogleUser.user.name,
                  avatar: GoogleUser.user.photo,
                });

                dispatch(setID(uid));
                navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
              } else {
                Alert.alert('Error de Login', 'Ocorreu um erro ao tentar acessar sua conta google');
              }
            })
          }
        />
        <SwitchLoginRegister
          phrase="Já possui uma conta?"
          buttonText="Fazer Login"
          onPress={async () => navigation.navigate('Login')}
        />
      </FormArea>
    </Container>
  );
}
