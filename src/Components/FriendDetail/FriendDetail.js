import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h1>This is friend details : {friendId}</h1>
            <h1>Name : {friend.name}</h1>
            <h4>Phone : {friend.phone}</h4>
            <p>Email : {friend.email}</p>
            <p>Website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;