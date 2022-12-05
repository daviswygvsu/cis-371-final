import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";
import '../../styles/PC.css';

function PC (props ){
    let navigate = useNavigate();

    return(
        <tr>
            <td>{props.pc.name}</td>
            <td>{props.pc.portrait}</td>
            <td>{props.pc.game}</td>
            <td>{props.pc.level}</td>
            <td>{props.pc.xp}</td>
            <td>{props.pc.gp}</td>
            <td>{props.pc.user}</td>
            <button type = 'button' onClick = { () => { navigate(`/pcs/edit/${props.pc.id}`) } }>Edit</button> <button type = 'button' onClick = { () => { fetchDestroy( props.pc.id, props.update ) } }>Destroy</button>
        </tr>
    )
}

function fetchDestroy (id, update){
    fetch(`/characters/destroy/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.pcs) }
    );
}

export default PC;