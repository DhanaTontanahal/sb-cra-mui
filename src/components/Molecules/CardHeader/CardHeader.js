import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '../../Atoms/Avatar/Avatar'
import IconButton from '../../Atoms/IconButton/IconButton';
import Icon from '../../Atoms/Icon/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Typography from '../../Atoms/Typography/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
}));

export default function CardHeaderHook(props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return <CardHeader
    avatar={
      <Avatar src={props.avatarImg} aria-label="recipe" className={classes.avatar}>
        
      </Avatar> 
    }
    action={
      <IconButton aria-label="settings">
        <Icon iconType={props.iconType}></Icon>
      </IconButton>
    }
    title={
      <Typography  variant="body1">{props.title}</Typography>
    }
    subheader={props.subheader}
  />
}
