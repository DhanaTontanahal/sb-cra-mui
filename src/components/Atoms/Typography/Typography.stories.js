import React from 'react'
import Typography from "./Typography"
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
    title: 'Atoms/Typography',
    component: Typography
}

export const Typography1 = () => <Typography gutterBottom={true} color={select('Select', ['initial', 'inherit', 'primary', 'secondary', 'error', 'primary'],'primary','Select')} variant="h1">{text('Label', 'H1 text')}</Typography>
export const Typography2 = () => <Typography variant="h2">{text('Label', 'H2 text')}</Typography>
export const Typography3 = () => <Typography variant="h3">{text('Label', 'H3 text')}</Typography>

