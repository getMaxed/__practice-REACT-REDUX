import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            numberEntered: null,
            showingPost: null
        };
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(posts => {
                const randomNumber = Math.floor(Math.random() * 100);
                const randomPost = posts.find(post => post.id === randomNumber);
                this.setState({
                    posts: posts,
                    showingPost: randomPost
                });
            });
    }

    componentDidUpdate(prevState) {
        console.log(prevState);
    }

    handleNumberEntered = number => {
        this.setState({
            numberEntered: number
        });
    };

    render() {
        return (
            <div>
                {this.state.posts.length !== 0 && (
                    <div className="container">
                        <Header post={this.state.showingPost} />
                        <Main post={this.state.showingPost} />
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
            <div>
                <h4 className="left">Post number : {props.post.id}</h4>
            </div>
            <div>
                <h4 className="right">Written by : {props.post.userId}</h4>
            </div>
        </div>
    );
};

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

const Main = props => {
    return (
        <div className="Main">
            <h2>{props.post.title}</h2>
            <p>{props.post.body}</p>
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
            <form onSubmit={this.handleSubmit}>
                <input
                    type="number"
                    min="0"
                    max="100"
                    value={this.state.formInput}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <input type="submit" value="submit" />
            </form>
        );
    }
}

/*
|--------------------------------------------------------------------------
| END
|--------------------------------------------------------------------------
*/

export default App;
