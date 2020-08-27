import React from 'react'
import { Button } from '@material-ui/core';

import {text, boolean,withKnobs} from '@storybook/addon-knobs';

export default {
    title: 'Form/Button',
    component: Button,
    decorators: [withKnobs]
}

export const primary = () =><Button variant="contained" color="primary">Primary</Button>
export const secondary = () =><Button variant="contained" color="secondary">Secondary</Button>
export const disabled = () =><Button variant="contained" disabled>Disabled</Button>

//just for testing
export const withAButton = () => (
    <button disabled={boolean('Disabled', false)}>{text('Label', 'Hello Storybook')}</button>
  );
