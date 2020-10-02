import React from 'react';
import { toBeInTheDocument, toHaveStyle } from
    '@testing-library/jest-dom';
import { render, getByText, cleanup } from '@testing-library/react';
import Input from '../Input'
import renderer from 'react-test-renderer'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

test('Test for Input rendered', () => {
    const { getByText } = render(<Input variant="filled" label="MyLabel"></Input>);
    const headerElement = getByText(/MyLabel/i);
    expect(headerElement).toBeInTheDocument();
});

