import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BlogDetailCard from './BlogDetailCardLayout';
import Typography from "../Atoms/Typography/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    root1: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
        marginLeft: '35%'
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

    const hndlComnttIpChnge = (e) => {
        props.hndlComnttIpChnge(e)
    }
    
    const postComment = () => {
        props.postComment();
    }

    useEffect(() => {
        if (didMountRef.current) {
            setBlogItem(props.blog[0]);
          
        } else didMountRef.current = true
    }, [props.blog]);


    
    return (

                <Grid item xs={12}>
                    <Typography className={classes.paper1} align="center" variant="h5" component="h2">
                        {blogItem.title}
                    </Typography>
                    <BlogDetailCard postComment={postComment} hndlComnttIpChnge={hndlComnttIpChnge} comments={props.comments} userName={props.userName} blogItem={blogItem} />
                </Grid>
                    
    );
}

export default BlogDetailGridLayout;