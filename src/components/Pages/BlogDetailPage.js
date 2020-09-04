import React, { useState, useEffect }  from 'react'
import BlogDetailGridLayout from '../Templates/BlogDetailGridLayout'
function BlogDetailPage({match},props) {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetchBlog();
    }, []);

    const fetchBlog = async () => {
        const blogDataById = await fetch(`http://localhost:3000/mockApi`);
        const blogData = await blogDataById.json();
        const blogItem = blogData.data.filter((item) => {
            return item.id == match.params.id
        });
        setBlog(blogItem);
    }


    return (
        <div>
            <BlogDetailGridLayout blog={blog} />
        </div>
    )
}

export default BlogDetailPage
