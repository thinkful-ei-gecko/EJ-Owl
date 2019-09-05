import React from 'react';
import './chat.css';
import cuid from 'cuid';

export default function Chat(props){
    console.log(props);

    let userChat = props.messages.map(val => {
        const event = props.users.find(participant => participant.id === val.participantId);
        const message = {...val, ...event};
        message.id = cuid();
        return message;
        } 
    )

    console.log(userChat);

    return userChat.map(message =>  
        <div key={message.id} className="chatBox"> 
            <img src={message.avatar} alt="avatar" className="chatImg"></img>
                <div className="message-body">
                    <h2>{message.name}</h2>
                    <p>{message.message}</p>
                    <p>{message.name} gave a {message.type}</p>
                </div>
        </div>
        );
}