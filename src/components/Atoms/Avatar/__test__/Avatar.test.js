import React from 'react';
import { toBeInTheDocument, toHaveStyle } from
    '@testing-library/jest-dom';
import { render, getByText, cleanup } from '@testing-library/react';
import Avatar from '../Avatar'
import renderer from 'react-test-renderer'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

test('Test for avatar rendered', () => {
    const { getByText } = render(<Avatar>MyAvatar</Avatar>);
    const headerElement = getByText(/MyAvatar/i);
    expect(headerElement).toBeInTheDocument();
});

