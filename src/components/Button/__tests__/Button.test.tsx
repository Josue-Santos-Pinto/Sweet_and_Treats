import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../index';

describe('Button', () => {
  test('the component rendered', () => {
    //escrever teste
    const { debug } = render(<Button title="Teste" onPress={() => {}} />);
    debug();
  });
});
