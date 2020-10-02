import React from 'react';
import {toBeInTheDocument,toHaveStyle} from 
  '@testing-library/jest-dom';
import { render, getByText , cleanup } from '@testing-library/react';
import HeaderHolder from '../HeaderHolder'
import renderer from 'react-test-renderer'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

 test('Test for header rendered', () => {

    const { getByText } = render(<HeaderHolder>Header</HeaderHolder>);
    const headerElement = getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();

  
 });