import React, { Component } from 'react';
import Share from '../Share/Share';

class Timeline extends Component {
    render() {
        const { shares } = this.props;
        return (
            <div className="timeline">
                {shares && shares.map(share => <Share share={share} />)}
            </div>
        );
    }
}

export default Timeline;
