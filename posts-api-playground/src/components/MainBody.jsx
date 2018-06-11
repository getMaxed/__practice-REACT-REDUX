import React from 'react';

const MainBody = props => {
    return (
        <React.Fragment>
            {props.postView ? (
                <p>{props.body}</p>
            ) : (
                <React.Fragment>
                    <ul>
                        <li>Name: {props.body.name}</li>
                        <li>Phone: {props.body.phone}</li>
                        <li>Username: {props.body.username}</li>
                        <li>Website: {props.body.website}</li>
                    </ul>
                    <br />
                    <button onClick={props.closeUserView} className="back">
                        Back to post
                    </button>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default MainBody;
