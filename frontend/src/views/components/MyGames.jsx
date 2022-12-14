import React, {useState, useEffect} from 'react';
import { redirect, useNavigate, useParams } from "react-router-dom";
import Game from './Game';

function MyGames( ) {

    const [games, setGames] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/games/mine/`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setGames(jsonRes.games) })
    }, []);

    return (<>
    <h1>My Games</h1>
    <div className='list'>
    <table>
        <tr>
            <th>Name</th>
            <th>World</th>
            <th></th>
        </tr>
        { games.map ( ( game ) => <Game game = { game } update = { setGames }/> ) }
    </table>
    <button className = 'cbutton' onClick = {() => navigate(`/games/create/`)}>+</button>
    </div>
    </>);
}

export default MyGames;