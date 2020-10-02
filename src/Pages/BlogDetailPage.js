import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { getMonth, getDate, getYear } from '../components/Particles/utils/dateUtils'
import { APP_BASE_URL } from "../components/Particles/appConstants"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DetailCard from '../components/Organisms/DetailCard/DetailCard';

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

function BlogDetailPage({ match }, props) {

    const { user } = useAuth0();
    const classes = useStyles();

    const [blog, setBlog] = useState([]);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const hndlComnttIpChnge = (e) => {
        setNewComment(e.target.value);
    }

    const postComment = () => {
        const payload = {
            commentValue: newComment,
            blogId: match.params.postId,
            userId: 122,
            createdDate: getDate() + "-" + getMonth() + "-" + getYear()
        };

        axios({
            url: `${APP_BASE_URL}/api/v1/comments`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setTimeout(function () {

                setNewComment('');
                getComments(match.params.postId);
            }, 1000);

        })
            .catch(() => {
                console.log('Internal server error');
            });

    }


    useEffect(() => {
        getData();
        getComments(match.params.postId);
    }, []);


    const getComments = (postId) => {
        axios.get(`${APP_BASE_URL}/api/v1/comments/` + postId)
            .then((response) => {
                const data = response.data;
                let updatedComments = data.push({
                    "commentValue": "createNow",
                    "blogId": Number(postId),
                    "userId": 1,
                    "createdDate": String(new Date()),
                    "commentId": 378
                });
                setComments(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getData = () => {
        axios.get(`${APP_BASE_URL}/api/v1/blogs`)
            .then((response) => {
                const data = response.data;
                const blogItem = data.filter((item) => {
                    return item.blogId == match.params.postId
                });
                setBlog(blogItem);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Grid item xs={12}>
                <DetailCard
                    isStoryBook={false}
                    postComment={postComment}
                    hndlComnttIpChnge={hndlComnttIpChnge}
                    comments={comments}
                    userName={user.given_name}
                    blogItem={blog[0]} />
            </Grid>
        </div>
    );
}

export default BlogDetailPage
