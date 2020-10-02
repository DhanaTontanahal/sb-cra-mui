import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "../Atoms/Typography/Typography"
import Icon from "../Atoms/Icon/Icon"
import IconButton from "../Atoms/IconButton/IconButton"
import Link from "../Atoms/Link/Link"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position:'absolute'
        
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
      
    },
    content: {
    },
    cover: {
        width: 120,
        height: 120,
        borderRadius: '100%',
        position:'relative',
        left:0,
        top:0
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        
    },
    twitterIcon: {
        position:'relative',
        left:0,
        top:40
    },
    follow1:{
        position:'relative',
        left:0,
        top:100
    },
    follow2:{
        position:'relative',
        left:0,
        top:100
    }
}));

export default function MediaControlCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.firstName}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.lastName}
                    </Typography>
                </CardContent>
           

            </div>

     

            <CardMedia
                className={classes.cover}
                image={props.image}
                title={props.title}
            />
        </Card>
    );
}
