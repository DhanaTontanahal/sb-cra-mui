import React from 'react';
import { toBeInTheDocument, toHaveStyle } from
    '@testing-library/jest-dom';
import { render, getByText, cleanup } from '@testing-library/react';
import Link from '../Link'
import renderer from 'react-test-renderer'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

test('Test for Link rendered', () => {
    const { getByText } = render(<Link>MyLink</Link>);
    const linkElement = getByText(/MyLink/i);
    expect(linkElement).toBeInTheDocument();
});

