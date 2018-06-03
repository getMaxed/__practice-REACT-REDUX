import React, { Component } from 'react';

class Form extends Component {
    state = {
        share: ''
    };

    handleInputChange = e => {
        this.setState({
            share: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addShare(this.state.share);
        this.state.share = '';
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
                            className="form-control"
                            value={this.state.share}
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
