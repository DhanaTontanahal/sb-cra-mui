import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { useAuth0 } from "@auth0/auth0-react";
import Typography from '../Atoms/Typography/Typography'
import Card from '../Organisms/Card/Card'

const StyledDiv = styled.div`
.app {
    padding: 10px;
  }
  form {
    width: 50%;
  }
  
  .form-input {
    margin: 10px 0px;
  }
  
  .form-input input, .form-input textarea {
    width: 100%;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    border: 1px solid lightgray;
    padding: .375rem .75rem;
    outline: none;
    
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    outline: none;
  }
  
  .blog-post__display {
    border: 1px solid lightgrey;
    margin: 5px 0px;
    border-radius: 4px;
    padding: 10px;
  }

`;


function NewBlogPage() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const { user } = useAuth0();


    useEffect(() => {
        setTimeout(() => {
            getBlogPost();
            setCurrentUser(user);
        }, 100);

    }, []);

    const getBlogPost = () => {

        axios.get('/blogApi')
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

        const getRndInteger = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const getMonth = (min, max) => {
            const d = new Date();
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            return months[d.getMonth()];
        }

        const getDate = (min, max) => {
            var d = new Date();
            return d.getDate();
        }

        const getYear = (min, max) => {
            var d = new Date();
            return d.getFullYear();
        }


        const payload = {
            postId: getRndInteger(100, 9999),
            postedBy: currentUser.email,
            title: title,
            body: body,
            cardImage: imageUrl,
            subHeader: getMonth() + " " + getDate() + "," + getYear() + " . " + getRndInteger(1, 10) + " min read",
            avatarText: currentUser.email.substring(0, 1),
            responseCount: getRndInteger(3, 199),
            clapCount: getRndInteger(9, 100),
            cardContentVariant: "body2",
            cardContentHeading: title,
            content: body,
            color: "textSecondary"
        };


        axios({
            url: '/blogApi/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                resetUserInputs();
                getBlogPost();
            })
            .catch(() => {
                console.log('Internal server error');
            });;
    };

    const resetUserInputs = () => {

        setTitle('');
        setBody('');
        setImageUrl('');
    };

    const displayBlogPost = (posts) => {

        if (!posts.length) return null;


        return posts.map((blog, index) => (
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
            // <div key={index} className="blog-post__display">
            //     <h3>{post.title}</h3>
            //     <p>{post.body}</p>
            // </div>
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
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-input">
                    <textarea
                        placeholder="body"
                        name="body"
                        cols="30"
                        rows="10"
                        value={body}
                        onChange={handleChange}
                    >

                    </textarea>
                </div>
                <div className="form-input">
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={imageUrl}
                        onChange={handleChange}
                    />
                </div>


                <button>Post</button>
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
