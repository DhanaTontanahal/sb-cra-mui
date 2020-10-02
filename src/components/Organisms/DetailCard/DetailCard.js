import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '../../Atoms/Typography/Typography'
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Input from "../../Atoms/Input/Input"
import Button from "../../Atoms/Button/Button"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        marginLeft: '34%',
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
    }
}));

export default function DetailCard(props) {

    const [expanded, setExpanded] = React.useState(false);
    const [comments, setComments] = useState([]);
    const [userName, setUserName] = useState('');

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();
    const didMountRef = useRef(false);
    //maintain the state of the blog passed through props
    const [blogItem, setBlogItem] = useState([]);

    useEffect(() => {

        if (props.isStoryBook) {
            setBlogItem(props.blogItem);
            setUserName(props.userName);
        }
        if (didMountRef.current) {
            setBlogItem(props.blogItem);
            setUserName(props.userName);

        } else didMountRef.current = true
    }, [props.blogItem]);

    useEffect(() => {
        if (props.isStoryBook) {
            setComments(props.comments);
        }
        if (didMountRef.current) {
            setComments(props.comments);

        } else didMountRef.current = true
    }, [props.comments]);


    return (
        <>
            <Typography className={classes.paper1} align="center" variant="h5" component="h2">
                {blogItem.title}
            </Typography>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="250"
                        image={blogItem.postImgUrl}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {blogItem.title}
                        </Typography>
                        <Typography variant="body2" align="left" color="textSecondary" component="p">
                            {blogItem.content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {
                            comments.map((comment) => {
                                return (
                                    <>
                                        <div>
                                            <List
                                                key={comment.commentId}
                                                className={classes.root1}>
                                                <ListItem alignItems="flex-start">
                                                    <ListItemAvatar>
                                                        <Avatar alt="User " src="" />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={userName}
                                                        secondary={
                                                            <>
                                                                <Typography
                                                                    component="span"
                                                                    variant="body2"
                                                                    className={classes.inline}
                                                                    color="textPrimary"
                                                                >
                                                                </Typography>
                                                                {
                                                                    comment.commentValue === "createNow" ?
                                                                        <>
                                                                            <Input style={{ margin: '2px', width: "100%" }} id="comment" label="Enter the comment" onChange={props.hndlComnttIpChnge} variant="outlined" />

                                                                            <Button
                                                                                style={{ margin: '2px', width: "100%" }}
                                                                                onClick={props.postComment}
                                                                                size='medium'
                                                                                variant='contained'
                                                                                color='primary'

                                                                            >
                                                                                Submit
                                                                    </Button>
                                                                        </>

                                                                        :

                                                                        <>
                                                                            <span style={{ textAlign: 'left' }}>
                                                                                {comment.commentValue}
                                                                                <span style={{ float: 'right' }}>
                                                                                    {comment.createdDate}
                                                                                </span>
                                                                            </span>
                                                                        </>
                                                                }
                                                            </>
                                                        }
                                                    />
                                                </ListItem>
                                            </List>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </CardContent>
                </Collapse>
            </Card>
        </>
    );
}



