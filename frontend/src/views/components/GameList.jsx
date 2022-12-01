import React, {useState, useEffect} from 'react';
import Game from './Game';
import '../../styles/GameList.css';

function GameList( ) {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('/games').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setGames(jsonRes.games) })
    }, []);

    return (
    <table className = 'list'>
        <tr>
            <th>Name</th>
            <th>World</th>
            <th>GM</th>
            <th></th>
        </tr>
        { games.map ( ( game ) => <Game game = { game } update = { setGames }/> ) }
    </table>);
}

export default GameList;