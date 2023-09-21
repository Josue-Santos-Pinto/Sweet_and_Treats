import React from 'react';
import { Container, FormArea, Input, InputArea, TextError } from './styles';
import { useForm, Controller } from 'react-hook-form';

import AuthHeader from '../../components/AuthHeader';
import Button from '../../components/Button';
import AuthOptions from '../../components/AuthOptions';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SwitchLoginRegister from '../../components/SwitchLoginRegister';
import { useNavigation } from '@react-navigation/native';
import SlashedOr from '../../components/SlashedOr';
import CreateUser from '../../services/CreateUser';

type FormDataProps = {
  email: string;
  password: string;
  password_confirm: string;
};

const RegisterSchema = yup.object({
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
        console.log(uid);
        if (uid) navigation.reset({ index: 1, routes: [{ name: 'MainDrawer' }] });
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
        </InputArea>

        <InputArea>
          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange } }) => (
              <Input
                placeholder="Confirmar Senha"
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
        <AuthOptions />
        <SwitchLoginRegister
          phrase="Já possui uma conta?"
          buttonText="Fazer Login"
          onPress={async () => navigation.navigate('Login')}
        />
      </FormArea>
    </Container>
  );
}
