import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from '@material-ui/styles'
import theme from "../src/sb-themes"

const GlobalWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
addDecorator(withKnobs);