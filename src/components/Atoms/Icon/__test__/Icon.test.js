import React from 'react';
import { toBeInTheDocument, toHaveStyle } from
    '@testing-library/jest-dom';
import { render, getByText, cleanup, asFragment } from '@testing-library/react';
import Icon from '../Icon'
import renderer from 'react-test-renderer'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

test('renders into document', () => {
    render(<Icon iconType='menu'></Icon>)
  
  })

