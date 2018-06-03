import React, { Component } from 'react';
import Share from '../Share/Share';

class Timeline extends Component {
    render() {
        const { shares } = this.props;
        // const sortedShares = [];

        // if (Array.isArray(shares)) {
        //     const sortedShares = shares
        //         .slice()
        //         .filter(share => share.body !== '')
        //         .reverse();
        //     console.log(shares);
        //     console.log(sortedShares);
        // }

        return (
            <div className="timeline">
                {Array.isArray(shares) &&
                    shares.map(share => <Share key={share.id} share={share} />)}
            </div>
        );
    }
}

export default Timeline;
