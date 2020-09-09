import React from 'react'
import Typography from "./Typography"
import { text, boolean, select } from '@storybook/addon-knobs';

export default {
    title: 'Atoms/Typography',
    component: Typography
}

export const Typography1 = () => <Typography
    gutterBottom={true}
    color={select('Color', ['initial', 'inherit', 'primary', 'secondary', 'error', 'primary'], 'primary', 'Select')}
    variant={select('Variant', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly', 'inherit'], 'subtitle1', 'Select')}
    align={select('Align', ['inherit', 'left', 'center', 'right', 'justify'], 'center', 'Select')}
    display={select('Display', ['initial', 'block', 'inline'], 'block', 'Select')}
    noWrap={boolean('NoWrap', true)}
>{text('Label', 'H1 text')}

</Typography>

