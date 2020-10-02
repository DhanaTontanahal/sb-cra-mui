import React from 'react'
import Tag from "./Tag"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default {
    title: 'Atoms/Tag',
    component: Tag
}


export const MyTag = () => {
    const classes = useStyles();
    return(<Tag className={classes.paper}>React</Tag>)

}
