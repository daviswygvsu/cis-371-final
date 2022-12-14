import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";


function Game( props ) {

    let navigate = useNavigate();

    return (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.world}</td>
        <button type = 'button' onClick = { () => { navigate(`/games/edit/${props.game.id}`) } }>Edit</button> <button type = 'button' className = 'dbutton' onClick = { () => { fetchDestroy( props.game.id, props.update ) } }>Destroy</button>
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

export default Game;