import React, {useState, useEffect} from 'react';
import '../../styles/GameList.css';

function Game( props ) {
    return (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.world}</td>
        <td>{props.game.gm}</td>
    </tr>
    );
}

export default Game;