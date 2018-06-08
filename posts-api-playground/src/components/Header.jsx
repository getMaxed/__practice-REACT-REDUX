import React from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = props => {
    return (
        <div className="header">
            <HeaderLeft postNumber={props.post.id} />
            <HeaderRight
                postAuthor={props.user}
                openUserView={props.openUserView}
            />
        </div>
    );
};

export default Header;
