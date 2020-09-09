import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '../../Atoms/HeaderHolder/HeaderHolder';
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button'
import IconButton from "../../Atoms/IconButton/IconButton"
import Icon from "../../Atoms/Icon/Icon"
import Avatar from '../../Atoms/Avatar/Avatar'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  newBtn: {
    fontStyle: 'revert',
    border: '1px solid gray',
    color: 'black',
    padding: 5,
    margin: '1px',
    borderRadius: '5px',
    textDecoration: 'none !important',
    height: '26px',
    width: '50px',
    textAlign: 'center'
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


export default function ButtonAppBar(props) {
  const classes = useStyles();

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <AppBar color="default" position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Medium Blog
       </Typography>


        {
          props.isAuthenticated ?
            <div>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="new">
                <Link className={classes.newBtn} to={`new`}>New</Link>
              </IconButton>
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


              <IconButton onClick={props.avatarClick}>
                <Avatar
                  alt='User'
                  variant='circle'
                  size='small'
                  aria-label='U'
                  style={{ marginLeft: '16px' }}

                />

              </IconButton>

              <Button variant="contained" size="medium" onClick={() => logout()} color="secondary">Logout</Button>
            </div>

            :
            <div>
              <Button variant="outlined" size="medium" onClick={() => loginWithRedirect()} color="default">Subscribe</Button>&nbsp;
              <Button variant="outlined" size="medium" onClick={() => loginWithRedirect()} color="default">Write</Button>&nbsp;
              <Button variant="outlined" size="medium" onClick={() => loginWithRedirect()} color="default">Signin</Button>&nbsp;
              <Button variant="contained" size="medium" onClick={() => loginWithRedirect()} color="primary">Get Started</Button>
            </div>


        }


      </Toolbar>
    </AppBar>
  );
}
