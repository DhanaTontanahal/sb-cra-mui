import React from 'react'
import { SvgIcon } from '@material-ui/core';

export default function SvgIconHook(props) {
  const { children, ...rest } = props;
  return <SvgIcon {...rest}>{children}</SvgIcon>;
}