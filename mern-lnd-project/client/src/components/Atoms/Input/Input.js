import React from 'react'
import { TextField } from '@material-ui/core';

export default function TextFieldHook(props) {
    const {...rest} = props;
    return <TextField {...rest} />
  }