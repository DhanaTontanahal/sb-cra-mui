const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogSchema = new Schema({
    postId:String,
    id:String,
    title: String,
    subHeader: String,
    avatarText:String,
    responseCount:String,
    clapCount:String,
    cardContentVariant:String,
    cardContentHeading:String,
    content:String,
    body: String,
    cardImage:String,
    date: {
        type: String,
        default: Date.now()
    }
});

const blog = mongoose.model('Blog',blogSchema);
module.exports = blog;
