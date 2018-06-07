import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            numberEntered: null,
            showingPost: null,
            showingUser: null,
            postView: true
        };
    }

    componentDidMount() {
        const postsURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(postsURL)
            .then(res => res.json())
            .then(posts => {
                const randomNumber = Math.floor(Math.random() * 100);
                const randomPost = posts.find(post => post.id === randomNumber);
                fetch(
                    `https://jsonplaceholder.typicode.com/users/${
                        randomPost.userId
                    }`
                ).then(res => {
                    res.json().then(user => {
                        this.setState({
                            posts: posts,
                            showingPost: randomPost,
                            showingUser: user
                        });
                    });
                });
            });
    }

    handleNumberEntered = number => {
        this.setState({
            numberEntered: number
        });
    };

    handleOpenUserView = () => {
        this.setState({
            postView: false
        });
    };

    handleGoBack = () => {
        this.setState({
            postView: true
        });
    };

    render() {
        return (
            <div>
                {this.state.posts.length !== 0 && (
                    <div className="container">
                        <Header
                            post={this.state.showingPost}
                            user={this.state.showingUser}
                            openUserView={this.handleOpenUserView}
                        />
                        <Main
                            post={this.state.showingPost}
                            user={this.state.showingUser}
                            postView={this.state.postView}
                            goBack={this.handleGoBack}
                        />
                        <Footer numberEntered={this.handleNumberEntered} />
                    </div>
                )}
            </div>
        );
    }
}

/*
|--------------------------------------------------------------------------
| Header Component
|--------------------------------------------------------------------------
*/

const Header = props => {
    return (
        <div className="header">
            <PostNumber postNumber={props.post.id} />
            <PostAuthor
                postAuthor={props.user}
                openUserView={props.openUserView}
            />
        </div>
    );
};

/*
|--------------------------------------------------------------------------
| PostNumber Component
|--------------------------------------------------------------------------
*/

const PostNumber = props => {
    return (
        <div>
            <h4 className="left">Post number : {props.postNumber}</h4>
        </div>
    );
};

/*
|--------------------------------------------------------------------------
| PostAuthor Component
|--------------------------------------------------------------------------
*/

const PostAuthor = props => {
    let name = props.postAuthor.name.slice();

    if (name.length > 21) {
        const nameArr = name.split(' ');
        const firstName = nameArr[0].charAt(0).concat('.');
        const lastName = nameArr.slice(1);
        return (name = firstName + ' ' + lastName);
        console.log(name);
    }

    return (
        <div>
            <h4 className="right">
                Author:&nbsp;
                <span onClick={props.openUserView} className="author">
                    {name}
                </span>
            </h4>
        </div>
    );
};

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

const Main = props => {
    const title = props.postView ? props.post.title : props.user.name;
    const body = props.postView ? props.post.body : props.user;

    return (
        <div className="Main">
            <MainTitle title={title} />
            <MainBody
                body={body}
                postView={props.postView}
                goBack={props.goBack}
            />
        </div>
    );
};

/*
|--------------------------------------------------------------------------
| MainTitle Component
|--------------------------------------------------------------------------
*/

const MainTitle = props => {
    return <h2>{props.title}</h2>;
};

/*
|--------------------------------------------------------------------------
| MainBody Component
|--------------------------------------------------------------------------
*/

const MainBody = props => {
    return (
        <div>
            {props.postView ? (
                <p>{props.body}</p>
            ) : (
                <div>
                    <ul>
                        <li>Name: {props.body.name}</li>
                        <li>Phone: {props.body.phone}</li>
                        <li>Username: {props.body.username}</li>
                        <li>Website: {props.body.website}</li>
                    </ul>
                    <br />
                    <button onClick={props.goBack} className="back">
                        Back to post
                    </button>
                </div>
            )}
        </div>
    );
};

/*
|--------------------------------------------------------------------------
| Footer Component
|--------------------------------------------------------------------------
*/

class Footer extends Component {
    state = {
        formInput: ''
    };

    handleChange = e => {
        this.setState({
            formInput: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const number = this.state.formInput;
        this.props.numberEntered(number);
    };

    render() {
        return (
            <div className="footer">
                <form>
                    <label htmlFor="">Enter a number from 1 to 100 :</label>
                    &nbsp;&nbsp;
                    <div className="submitNumber">
                        <input
                            type="number"
                            min="0"
                            max="100"
                            value={this.state.formInput}
                            onChange={this.handleChange}
                        />&nbsp;&nbsp;
                        <button type="submit" onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

/*
|--------------------------------------------------------------------------
| END
|--------------------------------------------------------------------------
*/

export default App;
