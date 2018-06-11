import React from 'react';

const HeaderRight = props => {
    return (
        <React.Fragment>
            <h4 className="right">
                Author:&nbsp;
                <span onClick={props.openUserView} className="author">
                    {props.postAuthor.name}
                </span>
            </h4>
        </React.Fragment>
    );
};

export default HeaderRight;
