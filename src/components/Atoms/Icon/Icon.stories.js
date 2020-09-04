import React from 'react'
import Icon from "./Icon"
import { select} from '@storybook/addon-knobs';

export default {
    title: 'Atoms/Icon',
    component: Icon
}

export const DynamicIcon = () =><Icon iconType={select('Icons',['menu', 'notification','search','moreVert'], 'menu', 'Select')}></Icon>;