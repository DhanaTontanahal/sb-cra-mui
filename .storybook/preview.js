import React from 'react'
import { addDecorator , addParameters} from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
// import { withA11y } from '@storybook/addon-a11y'//deprecated in story book 6
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import  '@storybook/addon-console'
import { ThemeProvider } from '@material-ui/styles'
import theme from "../src/sb-themes"

const GlobalWrapper = storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
addDecorator(withKnobs);
// addDecorator(withA11y);//deprecated in story book 6

addParameters({
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
  viewport:{
    viewports:INITIAL_VIEWPORTS
  },
})