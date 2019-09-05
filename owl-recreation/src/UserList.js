import React from 'react';
import User from './User.js';

export default function UserList(props){
    const users = props.users.map((user, index) => {
        return (
        <User 
        name={user.name}
        avatar={user.avatar}
        inSession={user.inSession}
        onStage={user.onStage}
        key={index}
        />
        )})

    return users;
}