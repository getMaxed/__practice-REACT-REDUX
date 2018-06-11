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
        postView: true
    };

    async getData() {
        // get posts
        const getPostsResponse = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const posts = await getPostsResponse.json();
        // get showingPost
        const showingPost = posts[Math.floor(Math.random() * posts.length)];

        //get user
        const getUserResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${showingPost.userId}`
        );
        const showingUser = await getUserResponse.json();
        // return/setState
        return this.setState({ posts, showingPost, showingUser });
    }

    /*
    |--------------------------------------------------------------------------
    | LIFECYCLE, INITIAL API CALL
    |--------------------------------------------------------------------------
    */

    componentDidMount() {
        this.getData();
    }

    // componentDidMount() {
    //     const postsURL = 'https://jsonplaceholder.typicode.com/posts';
    //     fetch(postsURL)
    //         .then(res => res.json())
    //         .then(posts => {
    //             const randomPost =
    //                 posts[Math.floor(Math.random() * posts.length)];
    //             fetch(
    //                 `https://jsonplaceholder.typicode.com/users/${
    //                     randomPost.userId
    //                 }`
    //             ).then(res => {
    //                 res.json().then(user => {
    //                     this.setState(() => {
    //                         return {
    //                             posts: posts,
    //                             showingPost: randomPost,
    //                             showingUser: user
    //                         };
    //                     });
    //                 });
    //             });
    //         })
    //         .catch(err => console.log(err));
    // }

    /*
    |--------------------------------------------------------------------------
    | CALLBACKS
    |--------------------------------------------------------------------------
    */

    handleNumberEntered = number => {
        const postSelected = this.state.posts.find(post => post.id === number);
        this.setState(() => {
            return {
                showingPost: postSelected,
                postView: true
            };
        });

        const postAuthorURL = `https://jsonplaceholder.typicode.com/users/${
            postSelected.userId
        }`;

        fetch(postAuthorURL)
            .then(res => res.json())
            .then(user => {
                this.setState(() => {
                    return { showingUser: user };
                });
            });
    };

    handleOpenUserView = () => {
        this.setState(() => {
            return { postView: false };
        });
    };

    handleCloseUserView = () => {
        this.setState(() => {
            return { postView: true };
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
                            showingPostId={this.state.showingPost.id}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default App;
