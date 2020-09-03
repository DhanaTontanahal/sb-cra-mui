import React from 'react'
import Button from "./Button"
import {text, boolean, select} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Atoms/Button',
    component: Button
}

export const DynamicButton = () =><Button 
                                    onClick={action('clicked','Submitted')}
                                    size={select('Size',['small','medium','large'], 'medium', 'Select')}
                                    variant={select('Variant',['outlined', 'contained'], 'contained', 'Select')} 
                                    color={select('Color' , ['default', 'primary' , 'secondary'] , 'primary' , 'Select')}
                                    disabled={boolean('Disabled', false)} 
                                    >
                                    {text('Label', 'My Button')}
                            </Button>
