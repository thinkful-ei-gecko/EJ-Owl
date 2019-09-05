import React from 'react';
import './userboard.css'

//This will display the users on stage

export default function UserBoard(props){

    return (
        <div className="onSession">
        <img alt= "avatar" src={props.avatar}></img>
        <h2>{props.name}</h2>
        </div>
    )
}

