import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";
import Game from './Game';
import '../../styles/GameList.css';

function GameList( ) {
    const [games, setGames] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch('/games').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setGames(jsonRes.games) })
    }, []);

    return (<div className='list'>
    <table>
        <tr>
            <th>Name</th>
            <th>World</th>
            <th>GM</th>
            <th></th>
        </tr>
        { games.map ( ( game ) => <Game game = { game } update = { setGames }/> ) }
    </table>
    <button onClick = {() => navigate(`/games/create`)}>Create</button>
    </div>);
}

export default GameList;