import React, { useState } from 'react';
import './Join.css';
import {Route, Redirect} from 'react-router-dom'
function  Join() {
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    game: '',
    team: '',
    joinDate: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to create new player
    console.log(newPlayer);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Sports Management Website</h1>
      
        <label>
          Player Name:
          <input type="text" value={newPlayer.name} onChange={(event) => setNewPlayer({...newPlayer, name: event.target.value })} />
        </label>
        <br />
        <label>
          Game:
          <input type="text" value={newPlayer.game} onChange={(event) => setNewPlayer({...newPlayer, game: event.target.value })} />
        </label>
        <br />
        <label>
          Team:
          <input type="text" value={newPlayer.team} onChange={(event) => setNewPlayer({...newPlayer, team: event.target.value })} />
        </label>
        <br />
        <label>
          Join Date:
          <input type="date" value={newPlayer.joinDate} onChange={(event) => setNewPlayer({...newPlayer, joinDate: event.target.value })} />
        </label>
        <br />
        <button type="submit">Create New Player</button>
      </form>
    </div>
  );
}

export default Join;