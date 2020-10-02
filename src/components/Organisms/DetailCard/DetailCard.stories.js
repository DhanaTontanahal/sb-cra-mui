import React from 'react'
import DetailCard from "./DetailCard"

export default {
    title: 'Organisms/DetailCard',
    component: DetailCard
}

export const DetailCard1 = () => <DetailCard
    isStoryBook={true}
    userName="dhanashekhar.tontanahal@zemosolabs.com"
    blogItem={
        { "blogId": 7, "title": "Saas and React Redux", "content": "Saas and React Redux", "postedDate": "2020-08-18 00:00:00", "postedBy": "dhanashekhar.tontanahal@zemosolabs.com", "postImgUrl": "https://miro.medium.com/max/700/1*yjH3SiDaVWtpBX0g_2q68g.png", "readTime": "8", "clapsCount": 0, "updatedDate": null, "uId": 0 }
    }
    comments={[
        { "commentId": 1, "commentValue": "Thank you", "blogId": 7, "userId": 122, "createdDate": "18-8-2020" },
        { "commentId": 2, "commentValue": "Saas and React Redux", "blogId": 7, "userId": 122, "createdDate": "18-8-2020" },
        { "commentId": 3, "commentValue": "Saas and React Redux123", "blogId": 7, "userId": 122, "createdDate": "18-8-2020" },
        { "commentId": 6, "commentValue": "Saas and React Redux123", "blogId": 7, "userId": 122, "createdDate": "19-8-2020" },
        { "commentId": 7, "commentValue": "React hooks are definitely better", "blogId": 7, "userId": 122, "createdDate": "19-8-2020" },
        { "commentId": 8, "commentValue": "Thank you", "blogId": 7, "userId": 122, "createdDate": "21-8-2020" },
        { "commentId": 9, "commentValue": "testing the comments recall..", "blogId": 7, "userId": 122, "createdDate": "21-8-2020" },
        { "commentId": 10, "commentValue": "reset the comments section", "blogId": 7, "userId": 122, "createdDate": "21-8-2020" },
        { "commentValue": "createNow", "blogId": 7, "userId": 1, "createdDate": "Wed Sep 30 2020 15:06:56 GMT+0530 (India Standard Time)", "commentId": 378 }
    ]} />
