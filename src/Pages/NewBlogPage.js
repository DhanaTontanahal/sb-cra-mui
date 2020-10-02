import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";
import Typography from '../components/Atoms/Typography/Typography'
import Card from '../components/Organisms/Card/Card'
import { getMonth, getDate, getYear } from '../components/Particles/utils/dateUtils'
import { getRndInteger } from '../components/Particles/utils/mathUtils';
import Button from "../components/Atoms/Button/Button"
import TextArea from "../components/Atoms/TextArea/TextArea"
import Input from "../components/Atoms/Input/Input"
import { APP_BASE_URL } from "../components/Particles/appConstants"

const StyledDiv = styled.div`
.app {
    padding: 10px;
  }
  form {
    width: 50%;
    margin-left:26%;
  }
  
  .form-input {
    margin: 10px 10px;
  }
  
  .form-input input, .form-input textarea {

    
  }
  
  button {

  }
  
  .blog-post__display {

  }

`;


function NewBlogPage() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [posts, setPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const { user } = useAuth0();

    useEffect(() => {
        setTimeout(() => {
            getBlogPost();
            setCurrentUser(user);
        }, 100);

    });

    const getBlogPost = () => {
        axios.get(`${APP_BASE_URL}/api/v1/blogs`)
            .then((response) => {
                const data = response.data;
                setPosts(data)
            })
            .catch(() => {
                alert('Error retrieving data!!!');
            });
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'title') {
            setTitle(value)
        }
        else if (name === 'body') {
            setBody(value);
        }
        else if (name === 'imageUrl') {
            setImageUrl(value);
        }
    };


    const submit = (event) => {
        event.preventDefault();
        const getUId = (email) => {
            const userData = [{ "uId": 122, "email": "dhanashekhar.tontanahal@zemosolabs.com" }, { "uId": 123, "email:": "tontanahaldhana@gmail.com" }];
            const filteredUser = userData.filter((user) => {
                return user.email === email;
            })
            return filteredUser.uId;
        }

        const payload = {
            title: title,
            content: body,
            postedDate: getYear() + "-" + getMonth() + "-" + getDate() + " 00:00:00",
            postedBy: currentUser.email,
            postImgUrl: imageUrl,
            readTime: getRndInteger(1, 10),
            clapsCount: 0,
            updatedDate: "",
            userId: getUId(currentUser.email)
        };

       
        axios({
            url: `${APP_BASE_URL}/api/v1/blogs`,
            method: 'POST',
            data: payload,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            resetUserInputs();
            getBlogPost();
        })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    const resetUserInputs = () => {

        setTitle('');
        setBody('');
        setImageUrl('');
    };

    const displayBlogPost = (posts) => {

        if (!posts.length) return "No posts";


        return posts.map((blog, index) => (
            <Card
                key={blog.blogId}
                postId={blog.blogId}
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
        <StyledDiv>
            <Typography
                gutterBottom={true}
                color='initial'
                variant='h3'
                align='center'
                display='block'
            >Post your own thoughts here
            </Typography>

            <form onSubmit={submit}>
                <div className="form-input">
                    <Input  value={title} name="title" label="Title" onChange={handleChange} variant="outlined" />
                    
                </div>
                <div className="form-input">
                    <TextArea style={{ width: "100%" }} name="body" value={body} onChange={handleChange} placeholder="Enter the content" rowsMin={15}></TextArea>
                </div>
                <div className="form-input">
                <Input value={imageUrl} name="imageUrl" label="Image link" onChange={handleChange} variant="outlined" />

                </div>


                <Button
                    onClick={submit}
                    size='medium'
                    variant='contained'
                    color='primary'
                >
                    Post
                </Button>

            </form>

            <div className="blog-">
                <Typography
                    gutterBottom={true}
                    color='initial'
                    variant='h5'
                    align='center'
                    display='block'
                >My Posts
            </Typography>
                {displayBlogPost(posts.filter(p => p.postedBy === user.email))}
            </div>
        </StyledDiv>
    );
}

export default NewBlogPage
