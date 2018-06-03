import React, { Component } from 'react';
import moment from 'moment';

class Share extends Component {
    render() {
        const { share } = this.props;
        return (
            <div className="card share">
                <div className="card-body">
                    <h5 className="card-title">
                        {moment(share.time).fromNow()}
                    </h5>
                    <p className="card-text">{share.body}</p>
                </div>
                <button type="submit" className="btn btn-danger btn-block">
                    Delete
                </button>
            </div>
        );
    }
}

export default Share;
