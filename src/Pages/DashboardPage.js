import React, { useEffect, useState } from "react";
import Card from '../components/Organisms/Card/Card'
import BlogPostLayout from '../components/Templates/BlogPostLayout'
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth0 } from "@auth0/auth0-react";
import { getMonth, getDate, getYear } from '../components/Particles/utils/dateUtils'
import { APP_BASE_URL } from "../components/Particles/appConstants"

const saveOrUpdateTheAuth0User = (user) => {
    const getCreatedDate = () => {
        const createdDate = getYear() + "-" + getMonth() + "-" + getDate() + " 00:00:00";
        return createdDate;
    }

    const userPayload = {
        "firstName": user.name,
        "lastName": user.family_name,
        "about": "",
        "twitterUrl": "",
        "createdDate": getCreatedDate(),
        "updatedDate": "",
        "isActive": true,
        "avatarLink": user.picture,
        "userName": user.email
    };

    axios({
        url: `${APP_BASE_URL}/api/v1/users`,
        method: 'POST',
        data: userPayload,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        console.log("Auth 0 User details inserted in the Database")
    })
        .catch(() => {
            console.log('Internal server error');
        });


}

const checkAndUpdateUser = (user) => {
    axios({
        url: `${APP_BASE_URL}/api/v1/users/exist/` + user.email,
        method: 'GET',
    }).then((res) => {

        if (!res.data) {
            saveOrUpdateTheAuth0User(user);
        }
        else {
            return;
        }
    })
        .catch(() => {
            console.log('Internal server error');
        });

}
function DashboardPage({ match }) {

    const { user } = useAuth0();

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        checkAndUpdateUser(user);
        setTimeout(() => {
            getData();
        }, 200);

    }, []);

    const getData = () => {

        setLoading(true);
        axios.get(`${APP_BASE_URL}/api/v1/blogs`)
            .then((response) => {
                const data = response.data;
                setLoading(false);
                setBlogs(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <BlogPostLayout>
                {(blogs.length > 0 && !loading) ?
                    blogs.map((blog, index) =>
                        <Card
                            key={blog.blogId}
                            postId={blog.blogId}
                            cardHeaderTitle={blog.postedBy}
                            subHeader={blog.postedDate}
                            cardHeaderAvatarString={blog.avatarText}
                            responseCount={blog.clapsCount}
                            cardMedia={blog.postImgUrl}
                            clapCount={blog.clapsCount}
                            cardContentVariant="body2"
                            cardContentHeading={blog.title}
                            cardContent={blog.content}
                            cardContentColor="textSecondary"
                        />
                    )
                    : null
                }
                {
                    (blogs.length <= 0 && !loading) ?
                        <div data-testid="dashboard-loading">No Blogs from this author !</div> : null
                }
            </BlogPostLayout>
            {
                loading ?
                    <CircularProgress />
                    : null
            }
        </>
    )
}

export default DashboardPage












