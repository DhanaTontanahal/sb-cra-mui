import React from 'react'
import IconButton from "./IconButton"
import Icon from '../Icon/Icon';
import { select, text} from '@storybook/addon-knobs';

export default {
    title: 'Atoms/IconButton',
    component: IconButton
}

export const DynamicIconButton = () =><IconButton>{<Icon iconType={select('Icon',['moreVert','clapsIcon','cardSaveIcon','notification','menu','search'],'menu','Select')}></Icon>}</IconButton>;
