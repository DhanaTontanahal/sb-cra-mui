import React from 'react'
import Button from "./Button"
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: { onClick: { action: 'clicked' } },
}


export const DynamicButton = () => <Button
    onClick={action('clicked', 'Submitted')}
    size={select('Size', ['small', 'medium', 'large'], 'medium', 'Select')}
    variant={select('Variant', ['outlined', 'contained'], 'contained', 'Select')}
    color={select('Color', ['default', 'primary', 'secondary'], 'default', 'Select')}
    disabled={boolean('Disabled', false)}
>
    {text('Label', 'My Button')}
</Button>

export const LogButton = () => <Button
    onClick={() => console.log("Button clicked")}
    size={select('Size', ['small', 'medium', 'large'], 'medium', 'Select')}
    variant={select('Variant', ['outlined', 'contained'], 'contained', 'Select')}
    color={select('Color', ['default', 'primary', 'secondary'], 'default', 'Select')}
    disabled={boolean('Disabled', false)}
>
    {text('Label', 'My Button')}
</Button>
