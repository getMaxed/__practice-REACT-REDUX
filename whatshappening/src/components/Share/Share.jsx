import React, { Component } from 'react';

class Share extends Component {
    render() {
        const { share } = this.props;
        return (
            <div className="card share">
                <div className="card-body">
                    <h5 className="card-title">27 minutes ago</h5>
                    <p className="card-text">{share}</p>
                </div>
                <button type="submit" className="btn btn-danger btn-block">
                    Delete
                </button>
            </div>
        );
    }
}

export default Share;
