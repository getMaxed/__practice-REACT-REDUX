import React, { Component } from 'react';

class Form extends Component {
    state = {
        share: {
            body: ''
        }
    };

    handleInputChange = e => {
        const newShare = Object.assign({}, this.state.share);
        newShare[e.target.name] = e.target.value;
        this.setState({
            share: newShare
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addShare(this.state.share);
        const emptyShare = Object.assign({}, this.state.share, {
            body: '',
            id: '',
            time: ''
        });

        this.setState({ share: emptyShare });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4 className="h4 text-center">
                        Hey Max, what's happening?
                    </h4>
                    <div className="form-group">
                        <textarea
                            rows="5"
                            name="body"
                            className="form-control"
                            value={this.state.share.body}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary btn-block"
                    >
                        Share
                    </button>
                </form>
            </div>
        );
    }
}

export default Form;
