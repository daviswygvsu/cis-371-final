import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function NPC (props ){
    let navigate = useNavigate();

    return(
        <tr>
            <td>{props.npc.name}</td>
            <td>{props.npc.portrait}</td>
            <td>{props.npc.game}</td>
            <td>{props.npc.home}</td>
            <td>{props.npc.known}</td>
            <button type = 'button' onClick = { () => { navigate(`/npcs/edit/${props.npc.id}`) } }>Edit</button> <button type = 'button' onClick = { () => { fetchDestroy(props.npc.game, props.npc.id, props.update ) } }>Destroy</button>
        </tr>
    )
}

function fetchDestroy (game, id, update){
    fetch(`/characters/destroy/${game}/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.npcs) }
    );
}

export default NPC;