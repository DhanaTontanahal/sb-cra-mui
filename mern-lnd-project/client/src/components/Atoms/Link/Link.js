import React from 'react'
import { Link } from '@material-ui/core';

export default function LinkHook(props) {
   
    const {children,...rest} = props;
    return <Link {...rest}>{children}</Link>;
  }