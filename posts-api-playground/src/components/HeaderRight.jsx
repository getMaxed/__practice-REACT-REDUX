import React from 'react';

const HeaderRight = props => {
    return (
        <div>
            <h4 className="right">
                Author:&nbsp;
                <span onClick={props.openUserView} className="author">
                    {props.postAuthor.name}
                </span>
            </h4>
        </div>
    );
};

export default HeaderRight;
