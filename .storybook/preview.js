import React from 'react'
import {addDecorator} from '@storybook/react'

import {createGlobalStyle, ThemeProvider} from 'styled-components';

const themeDefault={
  primary:'white'
}

const GlobalStyles = createGlobalStyle`
  body{
    background-color:${props => props.theme.primary}
  }
`;

const GlobalWrapper = storyFn =>(
  <ThemeProvider theme={themeDefault}>
  <GlobalStyles />
      {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);