import React from 'react';
import {
  Container,
  FormArea,
  Input,
  InputArea,
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
import { SignIn } from '../../services/SignIn';

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(LoginSchema),
  });

  function handleLogin(data: FormDataProps) {
    SignIn(data.email, data.password);
  }
  const navigation = useNavigation();

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
                onChangeText={onChange}
                maxLength={12}
                secureTextEntry
                hasError={errors.password?.message}
              />
            )}
          />
          {errors.password?.message && <TextError>{errors.password?.message}</TextError>}

          <PasswordForgotButton>
            <PasswordForgotText>Esqueci minha senha</PasswordForgotText>
          </PasswordForgotButton>
        </InputArea>

        <Button title="Login" onPress={handleSubmit(handleLogin)} />
        <SlashedOr />
        <AuthOptions />
        <SwitchLoginRegister
          phrase="Não possui uma conta?"
          buttonText="Criar Conta"
          onPress={async () => navigation.navigate('Register')}
        />
      </FormArea>
    </Container>
  );
}
