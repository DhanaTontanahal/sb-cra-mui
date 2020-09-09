import React from 'react'
import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexGrow: 1,
//   }
// }));

export default function ButtonHook(props) {
  // const classes = useStyles();

  const { children, ...rest } = props;
  return <Button data-testid="button" {...rest}>{children}</Button>;
}