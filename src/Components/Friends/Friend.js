import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';
const Friends = (props) => {
    const {name, phone, email, id} = props.friend;
    const history = useHistory();

    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div className ="user">
            <h1>Name : {name}</h1>
            <h4>Phone : {phone}</h4>
           
            <Link to ={`/friend/${id}`}>Show Details of {id}</Link> <br/> 
            <button onClick= {()=> handleClick(id)}>Click ME</button>
        </div>
    );
};

export default Friends;