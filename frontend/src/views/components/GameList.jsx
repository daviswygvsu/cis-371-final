import React, {useState, useEffect} from 'react';

function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/users/').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setGames(jsonRes.games))
    });

    return (<div>
        {games.map(game => <li>{game.name}</li>)}
    </div>);
}

export default GameList;