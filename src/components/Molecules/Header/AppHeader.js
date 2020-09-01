import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import AppBar from '../../Atoms/HeaderHolder/HeaderHolder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '../../Atoms/Button/Button'
// import Button from '@material-ui/core/Button';
// import IconButton from '../../Atoms/Icon/Icon';
// import IconButton from '@material-ui/core/IconButton';
import IconButton from "../../Atoms/IconButton/IconButton"
// import MenuIcon from '@material-ui/icons/Menu';
import Icon from "../../Atoms/Icon/Icon"

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <Icon iconType="search"></Icon>
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
  );
}
