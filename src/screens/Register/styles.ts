import styled from 'styled-components/native';
import { MainStyles } from '../../theme/MainStyles';

type InputType = {
  hasError: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${MainStyles.background.primary};
  padding-horizontal: 15px;
`;
export const FormArea = styled.View`
  flex: 1;

  align-items: center;
`;

export const InputArea = styled.View`
  width: 90%;
  margin: 10px auto;
`;

export const TextError = styled.Text`
  color: red;
`;
export const Input = styled.TextInput<InputType>`
  width: 100%;
  height: auto;
  color: ${MainStyles.text.color.primary};
  background-color: #fff;
  margin-vertical: 8px;
  border: 1px solid
    ${(props: { hasError: boolean }) => (props.hasError ? 'red' : MainStyles.background.tertiary)};
  border-radius: 10px;
  padding: 12px;
`;
