import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '../../Atoms/HeaderHolder/HeaderHolder';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button'
import IconButton from "../../Atoms/IconButton/IconButton"
import Icon from "../../Atoms/Icon/Icon"
import Avatar from '../../Atoms/Avatar/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    position: 'relative',
    left: '60px',
    top: '20px',
    flexGrow: 1,
    fontWeight: 400,
    height: '65px',
    fill: 'rgb(41, 41, 41)',
    fontFamily: 'medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar color="default" position="static">
      <Toolbar>

        <Typography variant="h5" className={classes.title}>
          Medium Blog
       </Typography>






        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="search">
          <Icon iconType="search"></Icon>
        </IconButton>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="appBarSavedIcon">
          <Icon iconType="appBarSavedIcon"></Icon>
        </IconButton>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="notification">
          <Icon iconType="notification"></Icon>
        </IconButton>
        <Button variant="outlined" size="medium" color="default">Upgrade</Button>
        <Avatar
          alt='User'
          variant='circle'
          size='small'
          aria-label='U'
          style={{ marginLeft: '16px' }}
        >
        </Avatar>

      </Toolbar>
    </AppBar>
  );
}
