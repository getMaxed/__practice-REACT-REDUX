import React, { Component } from 'react';
import Share from '../Share/Share';

class Timeline extends Component {
    render() {
        const { shares, editForm, deleteShare } = this.props;

        return (
            <div className="timeline">
                {Array.isArray(shares) &&
                    shares.map(share => (
                        <Share
                            key={share.id}
                            share={share}
                            editForm={editForm}
                            deleteShare={deleteShare}
                        />
                    ))}
            </div>
        );
    }
}

export default Timeline;
