import React from 'react'
import Avatar from "./Avatar"
import {text, select} from '@storybook/addon-knobs';
import card1 from './logo192.png'

export default {
    title: 'Atoms/Avatar',
    component: Avatar
}


export const DynamicAvatar = () =><Avatar src={card1}
                                    alt={text('Alternate text','Avatar')}
                                    variant={select('Variant',['circle', 'rounded','square'], 'circle', 'Select')} 
                                    size={select('Display',['small', 'display','large'], 'small', 'Select')}
                                    aria-label="one">{text('Label', 'O')}</Avatar>




