import React from 'react';

const Comment = (props) => {
    const {name,email} = props.comment;
    return (
        <p>
            {name}:{email}
            {/* :{body} */}
        </p>
    );
};

export default Comment;