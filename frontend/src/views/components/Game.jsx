import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";
import '../../styles/GameList.css';


function Game( props ) {

    let navigate = useNavigate();

    return (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.world}</td>
        <td>{props.game.gm}</td>
        <button type = 'button' onClick = { () => { navigate(`/games/edit/${props.game.id}`) } }>Edit</button> <button type = 'button' onClick = { () => { fetchDestroy( props.game.gm, props.game.id, props.update ) } }>Destroy</button>
    </tr>
    );
}

function fetchDestroy ( gm, id, update ) {
    fetch(`/games/destroy/${gm}/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.games) }
    );
}

export default Game;