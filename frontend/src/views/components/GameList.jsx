import React, {useState, useEffect} from 'react';
import ReadGame from './ReadGame';

function GameList( ) {
    const [games, setGames] = useState([]);


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
        </tr>
        { games.map ( ( game ) => <ReadGame game = { game }/> ) }
    </table>
    </div>);
}

export default GameList;