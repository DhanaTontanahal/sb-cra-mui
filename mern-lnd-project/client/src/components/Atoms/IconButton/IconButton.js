import React from 'react'
import IconButton from '@material-ui/core/IconButton';

export default function IconButtonHook(props) {
    const {children,...rest} = props;
    return <IconButton {...rest}>{children}</IconButton>;
  }