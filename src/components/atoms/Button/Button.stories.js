import React from 'react'
import { Button } from '@material-ui/core';

export default {
    title: 'Form/Button',
    component: Button
}

export const primary = () =><Button variant="contained" color="primary">Primary</Button>
export const secondary = () =><Button variant="contained" color="secondary">Secondary</Button>
export const disabled = () =><Button variant="contained" disabled>Disabled</Button>
