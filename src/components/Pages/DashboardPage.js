import React, { useEffect, useState } from "react";
import Card from '../Organisms/Card/Card'
import BlogPostLayout from '../Templates/BlogPostLayout'
import { Typography } from "@material-ui/core";

function DashboardPage() {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetchDashboardData().then((blogPostData) => {
            // console.log(blogPostData)
            setBlogs(blogPostData.data);

        }).catch(()=>{console.error("Error while fetching the data !")})

        // fetch(
        //     `http://localhost:3000/mockApi`,
        //     {
        //         method: "GET"
        //     }
        // )
        //     .then(res => res.json())
        //     .then(response => {
        //         console.log(JSON.stringify(response))
        //         setBlogs(response.data)

        //     })
        //     .catch(error => console.log(error));
    }, []);

    const fetchDashboardData = async () => {
        const data = await fetch(`http://localhost:3000/mockApi`);
        const blogPostData = await data.json();
        return blogPostData;

    }
    const handleCardClick = () => {
        alert("hi")
    }
    return (
        <React.Fragment>

            <BlogPostLayout>
                {blogs.length > 0 ?
                    blogs.map((blog, index) =>
                        <Card
                            onClick={handleCardClick}
                            key={blog.id}
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
                    : "No Blogs from this author !"}
            </BlogPostLayout>
        </React.Fragment>
    )
}

export default DashboardPage












