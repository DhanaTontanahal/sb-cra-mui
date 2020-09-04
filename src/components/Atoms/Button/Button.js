import React from 'react'
import { Button } from '@material-ui/core';

export default function ButtonHook(props) {
  const { children, ...rest } = props;
  return <Button style={{"color":"green"}} data-testid="button" {...rest}>{children}</Button>;
}