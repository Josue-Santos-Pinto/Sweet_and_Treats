import React, { useState } from 'react';
import { Container, FormArea, Input, InputArea, TextError } from './styles';
import AuthHeader from '../../components/AuthHeader';
import { useForm, Controller } from 'react-hook-form';
import Button from '../../components/Button';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
    console.log(data);
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
                hasError={errors.email?.message}
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

        <Button title="Login" onPress={handleSubmit(handleLogin)} />
      </FormArea>
    </Container>
  );
}
