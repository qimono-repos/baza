import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../index';

describe('Index Component', () => {
    test('render expected text', () => {
        const { getByText } = render(<Index />);

   const repositoryText = getByText(
      'This project is LGBTQ FOSS friendly. Link to the Repository'
    );
            expect(repositoryText).toBeTruthy();
               })
    })
