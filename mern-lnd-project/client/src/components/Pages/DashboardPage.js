import React, { useEffect, useState } from "react";
import Card from '../Organisms/Card/Card'
import BlogPostLayout from '../Templates/BlogPostLayout'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(3),
        },
    },
}));

function DashboardPage({match}) {

    console.log(match.params.email)
    const classes = useStyles();
    const {user} = useAuth0();
    
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //just to delay the API call, not really required..
        setTimeout(() => {
            console.log(loading)
            getData();
        }, 2000);

    }, []);

    const getData = () => {
        setLoading(true);
        axios.get('/blogApi')
            .then((response) => {
                const data = response.data;
                setLoading(false);
                setBlogs(data);

            })
            .catch((error) => {
                console.log(error);
            });
    }
    console.log(blogs[0])
    return (
        <React.Fragment>

            <BlogPostLayout>
                {(blogs.length > 0 && !loading) ?
                    blogs.map((blog, index) =>
                        <Card
                            key={blog.postId}
                            postId={blog.postId}
                            cardHeaderTitle={blog.title}
                            subHeader={blog.subHeader}
                            cardHeaderAvatarString={blog.avatarText}
                            responseCount={blog.responseCount}
                            cardMedia={blog.cardImage}
                            clapCount={blog.clapCount}
                            cardContentVariant={blog.cardContentVariant}
                            cardContentHeading={blog.cardContentHeading}
                            cardContent={blog.content}
                            cardContentColor={blog.color}
                        />
                    )
                    : null
                }
                {
                    (blogs.length <= 0 && !loading) ?
                        "No Blogs from this author !" : null
                }
            </BlogPostLayout>
            {
                loading ?
                        <CircularProgress />
                    : null
            }

        </React.Fragment>
    )
}

export default DashboardPage












