import React from 'react';
import {toBeInTheDocument,toHaveStyle} from 
  '@testing-library/jest-dom';
import { render, getByText , cleanup } from '@testing-library/react';
import Button from '../Button'
import renderer from 'react-test-renderer'

afterEach(cleanup);

expect.extend({ toBeInTheDocument, toHaveStyle });

const propData = {
    size: 'small'
 };

 
 test('Test for button name rendered', () => {

    const { getByText } = render(<Button size='small'>HelloButton</Button>);
    const linkElement = getByText(/HelloButton/i);
    expect(linkElement).toBeInTheDocument();

  
 });
 
 test('Test for button name rendered', () => {
    const { getByTestId } = render(<Button size='small'>HelloButton</Button>);
    expect(getByTestId('button')).toHaveTextContent('HelloButton');
 });
 
it('matches snapshot', ()=>{
    const tree = renderer.create(<Button size='medium'>HelloButton</Button>).toJSON();
})
