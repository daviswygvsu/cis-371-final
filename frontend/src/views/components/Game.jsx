import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/GameList.css';


function Game( props ) {

    const navigate = useNavigate();

    return (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.world}</td>
        <td>{props.game.gm}</td>
        <button type = 'button' onClick = { () => { fetchEdit( props.game.id, navigate ) } }>Edit</button> <button type = 'button' onClick = { () => { fetchDestroy( props.game.id, props.update ) } }>Destroy</button>
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

function fetchEdit ( id, nav ) {
    fetch(`/games/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { nav ( `/games/edit/${id}` )}
    );
}



export default Game;