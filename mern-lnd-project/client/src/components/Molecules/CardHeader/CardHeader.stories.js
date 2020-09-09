import React from 'react'
import CardHeader from "./CardHeader"
import { text, select } from '@storybook/addon-knobs';

export default {
    title: 'Molecules/CardHeader',
    component: CardHeader
}


export const CardHeader1 = () => <CardHeader
    title={text('Title', 'This is the title of the card')}
    subheader={text('Subheader', 'September 1, 2020 . 2 min read')}
    avatarString={text('Avatar', 'F')}
    iconType={select('Icon',['moreVert','menu','search'],'moreVert','Select')}>
 
</CardHeader>





