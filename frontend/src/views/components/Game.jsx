import React, {useState, useEffect} from 'react';
import '../../styles/GameList.css';

function Game( props ) {
    return (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.world}</td>
        <td>{props.game.gm}</td>
        <button type = 'button' onClick = { () => { fetchEdit( props.game.id, props.update ) } }>Edit</button> <button type = 'button' onClick = { () => { fetchDestroy( props.game.id, props.update ) } }>Destroy</button>
    </tr>
    );
}

function fetchDestroy ( id, update ) {
    fetch(`/games/destroy/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.games) }
    );
}

function fetchEdit ( id, update ) {
    fetch(`/games/edit/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.games) }
    );
}



export default Game;