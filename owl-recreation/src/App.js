import React from 'react';
import './App.css';
import UserList from './UserList.js';
import Stage from './Stage.js';
import Chat from './Chat';

function App (props) {
    return ( 
      <main className = "App" >
      <div className="bottomNav">
        <div className="NavJoin"></div>
          <p className="Join">Join Stage</p>
      </div>
          <div className="currentSession">
              <div className="chatHeaders">
                <h2>Chat</h2>
                <h2>Participants</h2>
              </div>
            <UserList users={props.participants}/>
          </div>
          <div className="mainStage"><Stage users={props.participants}/></div>
          <div className="chat">
            <div className="chatHeaders">
            <h2>Chat</h2>
            <h2>Participants</h2>
            </div>
            <Chat users={props.participants} messages={props.messages}/>
            <div className="chatInput"></div>
          </div>
      </main>
    );
  }

export default App;