import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BlogDetailCard from './BlogDetailCardLayout';
import SocialNavIconList from '../Molecules/SocialNavIconList/SocialNavIconList'
import CardHeader from '../Molecules/CardHeader/CardHeader'
import Typography from "../Atoms/Typography/Typography";
import Icon from '../Atoms/Icon/Icon'
import IconButton from '../Atoms/IconButton/IconButton'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper2: {
        color: theme.palette.text.secondary,
    },
}));

function BlogDetailGridLayout(props) {

    const classes = useStyles();
    const didMountRef = useRef(false)
    const [blogItem, setBlogItem] = useState([]);

    useEffect(() => {
        if (didMountRef.current) {
            console.log(props.blog[0])
            setBlogItem(props.blog[0])
        } else didMountRef.current = true
    },[props.blog]);

    // console.log("Layout page");
    // console.log(blogItem);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                        <Typography  className={classes.paper1} align="center" variant="h5" component="h2">
                            {blogItem.title}
                        </Typography>
                </Grid>

                <Grid item xs={6} sm={3}>

                </Grid>

                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper2}>
                        <CardHeader
                            title='Dan Abromav'
                            subheader='September 1, 2020 . 2 min read'
                            avatarString='F'
                            iconType='moreVert'>
                        </CardHeader>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <SocialNavIconList />
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>

                </Grid>



                <Grid item xs={12}>
                        <BlogDetailCard blogItem={blogItem} />
                </Grid>

                <Grid item xs={6} sm={3}>

                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="body1" component="h2">
                            React Javascript
                        </Typography>

                    </Paper>
                </Grid>

                <Grid item xs={6} sm={3}>

                </Grid>
                <Grid item xs={6} sm={3}>

                </Grid>


                <Grid item xs={6} sm={3}>

                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <IconButton aria-label="clapsIcon">
                            <Icon iconType="clapsIcon"></Icon> {blogItem.clapCount}K
                        </IconButton>
                           
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>  <SocialNavIconList /></Paper>
                </Grid>
                <Grid item xs={6} sm={3}>

                </Grid>

            </Grid>
        </div>
    );
}

export default BlogDetailGridLayout;