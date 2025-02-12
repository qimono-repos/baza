import React from 'react';
import { render } from '@testing-library/react-native';
import About from '../(tabs)/about';

describe('About Component', () => {
    test('render expected text', () => {
        const { getByText } = render(<About/>);

   const repositoryText = getByText(
      'This project is LGBTQ + FOSS friendly. Link to the Code'
    );
            expect(repositoryText).toBeTruthy();
               })
    })
