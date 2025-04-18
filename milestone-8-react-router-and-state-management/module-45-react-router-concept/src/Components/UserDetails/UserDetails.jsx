import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();

    const params = useParams();
    console.log("Details id:",params)
    console.log("Details id:",params.userId)
    const {website,name} = user;

    const {userId} = useParams();
    console.log("ID",userId)

    console.log(user)
    return (
        <div>
             <h3>User Details Here</h3>
             <p>Name: {name}</p>
             <p>Website: {website}</p>     
        </div>
    );
};

export default UserDetails;
