import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    // const post = useLoaderData()
    const {title, body} = useLoaderData()
    const navigate = useNavigate();
    

    return (
        <div style={{border:'2px dotted red'}}>
            {/* <h2>{post.title}</h2>
            <p>{post.body}</p> */}
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;