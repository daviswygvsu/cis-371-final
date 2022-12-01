import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';
import React, {useState, useEffect} from 'react';
import '../../styles/GameList.css';

function Game( props ) {
    return (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.world}</td>
        <td>{props.game.gm}</td>
        <button type = 'button' onClick = { () => { fetch(`/games/edit/`) } }>Edit</button> <button type = 'button' onClick = { () => { fetch(`/games/destroy/`) } }>Destroy</button>
    </tr>
    );
}

export default Game;