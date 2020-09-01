import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '../../Atoms/Avatar/Avatar'
import IconButton from '../../Atoms/IconButton/IconButton';
import Icon from '../../Atoms/Icon/Icon';
import { makeStyles } from '@material-ui/core/styles';
import {red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function CardHeaderHook(props) {
    const classes = useStyles();
  const { children, ...rest } = props;
  return <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                      <Icon iconType="moreVert"></Icon>
                    </IconButton>
                    }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
}


// import React from 'react'
// import CardHeader from "./CardHeaderHook"
// import {text, boolean, select} from '@storybook/addon-knobs';

// export default {
//     title: 'Organism/CardHeader',
//     component: CardHeader
// }

// export const CardHeader1 = () =><CardHeader></CardHeader>
