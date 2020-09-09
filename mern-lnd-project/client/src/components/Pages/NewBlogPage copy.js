import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

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
class NewBlogPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            imageUrl: '',
            posts: [],
        }
    

    }
    



componentDidMount = () => {
    this.getBlogPost();
};


getBlogPost = () => {
    axios.get('/blogApi')
        .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
}

handleChange = ({ target }) => {
    console.log(target)
    const { name, value } = target;
    console.log(name, value)
    this.setState({ [name]: value });
};


submit = (event) => {
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
        title: this.state.title,
        body: this.state.body,
        cardImage: this.state.imageUrl,
        subHeader: getMonth() + " " + getDate() + "," + getYear() + " . " + getRndInteger(1, 10) + " min read",
        avatarText: "D",
        responseCount: getRndInteger(3, 199),
        clapCount: getRndInteger(9, 100),
        cardContentVariant: "body2",
        cardContentHeading: this.state.title,
        content: this.state.body,
        color: "textSecondary"
    };


    axios({
        url: '/blogApi/save',
        method: 'POST',
        data: payload
    })
        .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            this.getBlogPost();
        })
        .catch(() => {
            console.log('Internal server error');
        });;
};

resetUserInputs = () => {
    this.setState({
        title: '',
        body: '',
        imageUrl: ''
    });
};

displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
        <div key={index} className="blog-post__display">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));
};

render() {

    //JSX
    return (
        <StyledDiv>
            <h2>Post your own thoughts here</h2>
            <form onSubmit={this.submit}>
                <div className="form-input">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-input">
                    <textarea
                        placeholder="body"
                        name="body"
                        cols="30"
                        rows="10"
                        value={this.state.body}
                        onChange={this.handleChange}
                    >

                    </textarea>
                </div>
                <div className="form-input">
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={this.state.imageUrl}
                        onChange={this.handleChange}
                    />
                </div>


                <button>Post</button>
            </form>

            <div className="blog-">
                {this.displayBlogPost(this.state.posts.filter((post)=>post.postedBy.indexOf(this.state.user.email) !== -1))}
            </div>
        </StyledDiv>
    );
}
}


export default NewBlogPage;