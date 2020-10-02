import React from 'react';
import { toBeInTheDocument, toHaveStyle } from
    '@testing-library/jest-dom';
import { render, getByText, cleanup } from '@testing-library/react';
import Typography from '../Typography'
import renderer from 'react-test-renderer'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

test('Test for Typography rendered', () => {
    const { getByText } = render(<Typography>MyTypography</Typography>);
    const headerElement = getByText(/MyTypography/i);
    expect(headerElement).toBeInTheDocument();
});

