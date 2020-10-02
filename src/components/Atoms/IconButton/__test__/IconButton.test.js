import React from 'react';
import { toBeInTheDocument, toHaveStyle } from
    '@testing-library/jest-dom';
import { render, getByText, cleanup, asFragment } from '@testing-library/react';
import Icon from '../../Icon/Icon'
import renderer from 'react-test-renderer'
import IconButton from '../IconButton'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

test('renders into document', () => {
    render(<IconButton><Icon iconType='search'></Icon></IconButton>)

})


