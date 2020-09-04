import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    position:'relative',
    left:'60px',
    top:'20px',
    flexGrow: 1,
    fontWeight: 400,
    height:'65px',
    fill: 'rgb(41, 41, 41)',
    fontFamily: 'medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
  },
}));

export default function HeaderHolderHook(props) {
  const classes = useStyles();
  const {children,...rest} = props;
  return (
    <div className={classes.root}>
      <AppBar {...rest}>
       {children}
      </AppBar>
    </div>
  );
}
