import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function Location (props){
    let navigate = useNavigate();

    return(
        <tr>
            <td>{props.location.name}</td>
            <td>{props.location.map}</td>
            <td>{props.location.known ? "Known" : "Unknown"}</td>
            <button className='d-none d-sm-inline' type = 'button' onClick = { () => { navigate(`/locations/edit/${props.location.id}`) } }>Edit</button> <button type = 'button' className='dbutton d-none d-sm-inline' onClick = { () => { fetchDestroy(props.location.game, props.location.id, props.update ) } }>Destroy</button>
        </tr>
    )
}

function fetchDestroy (game, id, update){
    fetch(`/locations/destroy/${game}/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.locations) }
    );
}

export default Location;