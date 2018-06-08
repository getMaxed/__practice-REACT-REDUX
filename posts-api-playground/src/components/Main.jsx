import React from 'react';
import MainTitle from './MainTitle';
import MainBody from './MainBody';

const Main = props => {
    const title = props.postView
        ? props.post.title.charAt(0).toUpperCase() + props.post.title.slice(1)
        : props.user.name;
    const body = props.postView
        ? props.post.body.charAt(0).toUpperCase() + props.post.body.slice(1)
        : props.user;

    return (
        <div className="Main">
            <MainTitle title={title} />
            <MainBody
                body={body}
                postView={props.postView}
                closeUserView={props.closeUserView}
            />
        </div>
    );
};

export default Main;
