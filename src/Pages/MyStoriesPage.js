import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Card from '../components/Organisms/Card/Card'
import NoData from './NoData'
import { APP_BASE_URL } from "../components/Particles/appConstants"

function MyStoriesPage(props) {
    const [myBlogs, setMyBlogs] = useState([]);
    const { user } = useAuth0();

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 2000);
    });

    const getData = () => {
        axios.get(`${APP_BASE_URL}/api/v1/blogs`)
            .then((response) => {
                const data = response.data;
                const myBlogPosts = data.filter((blog) => {
                    return (blog.postedBy === user.email)
                })

                setMyBlogs(myBlogPosts);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const displayBlogPost = (posts) => {

        if (!posts.length) return <NoData />;
        return posts.map((blog, index) => (
            <Card
                key={blog.postId}
                postId={blog.postId}
                cardHeaderTitle={blog.postedBy}
                subHeader={blog.postedDate}
                cardHeaderAvatarString={blog.avatarText}
                responseCount={blog.upvotesCount}
                cardMedia={blog.postImgUrl}
                clapCount={blog.clapsCount}
                cardContentVariant={blog.cardContentVariant}
                cardContentHeading={blog.title}
                cardContent={blog.content}
                cardContentColor={blog.color}
            />
        ));
    };

    return (
        <div>
            {displayBlogPost(myBlogs)}
        </div>
    )
}

export default MyStoriesPage
