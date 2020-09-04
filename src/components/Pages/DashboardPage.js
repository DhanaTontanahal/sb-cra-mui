import React, { useEffect, useState } from "react";
import Card from '../Organisms/Card/Card'
import BlogPostLayout from '../Templates/BlogPostLayout'
import { Typography } from "@material-ui/core";

function DashboardPage() {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch(
            `http://localhost:3000/mockApi`,
            {
                method: "GET"
            }
        )
            .then(res => res.json())
            .then(response => {
                console.log(JSON.stringify(response))
                setBlogs(response.data)

            })
            .catch(error => console.log(error));
    }, []);


    return (
        <React.Fragment>
           
            <BlogPostLayout>
                {
                    blogs.map((blog, index) =>
                        <Card
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
                }
            </BlogPostLayout>
        </React.Fragment>
    )
}

export default DashboardPage












