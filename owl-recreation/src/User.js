import React from 'react';
import './user.css';

export default function User(props){

    let style = props.inSession ? 'green' : 'red';
    let session = props.inSession ? 'In Session' : 'Not in Session'

    let styleStage = props.onStage ? 'green' : 'red';
    let stage = props.onStage ? 'On Stage' : 'Not On Stage';

    return (
        <div className="user">
            <img className="currentSessionImg" alt= "avatar" src={props.avatar}></img>
        <div className="inSession-body">
            <h2 className="currentSessionName">{props.name}</h2>
            <p className={style}>{session}</p>
            <p className={styleStage}>{stage}</p>
        </div>
        </div>
    )
}