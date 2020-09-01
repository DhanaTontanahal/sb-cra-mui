import React from 'react'
import IconButton from "./IconButton"
import Icon from '../Icon/Icon';

export default {
    title: 'Atoms/IconButton',
    component: IconButton
}

const searchIcon = () => <Icon iconType="search"></Icon>;
const menuIcon = () => <Icon iconType="menu"></Icon>;
const notiIcon = () => <Icon iconType="notification"></Icon>;

export const SearchIconButton = () =><IconButton>{searchIcon()}</IconButton>;

export const MenuIconButton = () =><IconButton>{menuIcon()}</IconButton>;

export const NotifIconButton = () =><IconButton>{notiIcon()}</IconButton>;
