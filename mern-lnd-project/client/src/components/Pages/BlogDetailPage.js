import React, { useState, useEffect }  from 'react'
import BlogDetailGridLayout from '../Templates/BlogDetailGridLayout'
// import {data} from '../../data'
import axios from 'axios';

function BlogDetailPage({match},props) {

    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // fetchBlog();
        getData();
    },[]);

    const fetchBlog = async () => {
        // const blogDataById = await fetch(`http://localhost:3000/mockApi`);
        // const blogData = await blogDataById.json();
        // const blogItem = data.data.filter((item) => {
        //     return item.id === match.params.id
        // });
        // setBlog(blogItem);
    }

    const getData = () => {
        setLoading(true);
        axios.get('/blogApi')
            .then((response) => {
                const data = response.data;
                // console.log("in detail page")
                // console.log(data)
                // console.log(match.params.id)
                // console.log(typeof match.params.id)
                // console.log("--type")
                const blogItem = data.filter((item) => {
                    return item.postId === match.params.postId
                });
                // console.log(blogItem)
                setBlog(blogItem);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <BlogDetailGridLayout blog={blog} />
        </div>
    )
}

export default BlogDetailPage
