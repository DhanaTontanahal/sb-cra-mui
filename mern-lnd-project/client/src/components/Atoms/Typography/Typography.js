import React from 'react'
import { Typography } from '@material-ui/core';

export default function TypographyHook(props) {
  const { children, ...rest } = props;
  return <Typography {...rest}>{children}</Typography>;
}