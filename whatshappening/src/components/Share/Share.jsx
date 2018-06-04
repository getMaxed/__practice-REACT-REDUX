import React, { Component } from 'react';
import moment from 'moment';

class Share extends Component {
    render() {
        const { share, editForm, deleteShare } = this.props;
        return (
            <div className="card share">
                <div className="card-body">
                    <h5 className="card-title">
                        {moment(share.createdAt).fromNow()}
                        <i
                            className="fa fa-edit"
                            onClick={editForm(share.id)}
                        />
                    </h5>
                    <p className="card-text">{share.body}</p>
                </div>
                <button
                    onClick={deleteShare(share.id)}
                    className="btn btn-danger btn-block"
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Share;
