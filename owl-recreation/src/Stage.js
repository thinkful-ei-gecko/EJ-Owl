import React from 'react';
import UserBoard from './UserBoard';


export default function Stage(props){
    const onStage = [];
    for (let i = 0; i < props.users.length; i++){
        if (props.users[i].onStage === true){
            onStage.push(props.users[i]);
        }
    }

    return onStage.map(user => <UserBoard 
        name={user.name}
        avatar={user.avatar}
        key={user.id}
        />)
}