import React from 'react';

const HeaderLeft = props => {
    return (
        <React.Fragment>
            <h4 className="left">Post number : {props.postNumber}</h4>
        </React.Fragment>
    );
};

export default HeaderLeft;
