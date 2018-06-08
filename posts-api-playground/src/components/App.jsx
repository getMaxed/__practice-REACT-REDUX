import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import FooterForm from './FooterForm';

class App extends Component {
    /*
    |--------------------------------------------------------------------------
    | STATE
    |--------------------------------------------------------------------------
    */

    state = {
        posts: [],
        showingPost: null,
        showingUser: null,
        postView: true,
        error: false
    };

    /*
    |--------------------------------------------------------------------------
    | LIFECYCLE, INITIAL API CALL
    |--------------------------------------------------------------------------
    */

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

    /*
    |--------------------------------------------------------------------------
    | CALLBACKS
    |--------------------------------------------------------------------------
    */

    handleNumberEntered = number => {
        if (number < 1 || number > 100) {
            return this.setState({
                error: true
            });
        }

        const postSelected = this.state.posts.find(
            post => post.id === parseInt(number)
        );
        const postAuthorURL = `https://jsonplaceholder.typicode.com/users/${
            postSelected.userId
        }`;

        fetch(postAuthorURL)
            .then(res => res.json())
            .then(user => {
                this.setState({
                    showingUser: user,
                    showingPost: postSelected,
                    postView: true,
                    error: false
                });
            });
    };

    handleOpenUserView = () => {
        this.setState({
            postView: false
        });
    };

    handleCloseUserView = () => {
        this.setState({
            postView: true
        });
    };

    /*
    |--------------------------------------------------------------------------
    | RENDER
    |--------------------------------------------------------------------------
    */

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
                            closeUserView={this.handleCloseUserView}
                        />
                        <FooterForm
                            numberEntered={this.handleNumberEntered}
                            error={this.state.error}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
