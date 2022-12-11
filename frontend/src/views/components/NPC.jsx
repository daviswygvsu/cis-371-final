import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function NPC (props){
    let navigate = useNavigate();

    let [homeName, setHome] = useState("");

    useEffect(() => {
        fetch(`/locations/find/${props.npc.home}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(
            jsonRes => { setHome(jsonRes.location.name) }
        );
    }, []);

    return(
        <tr>
            <td>{props.npc.name}</td>
            <td>{props.npc.portrait}</td>
            <td>{homeName}</td>
            <td>{props.npc.known ? "Known" : "Unknown"}</td>
            <button className='d-none d-sm-inline' type = 'button' onClick = { () => { navigate(`/npcs/edit/${props.npc.id}`) } }>Edit</button> <button type = 'button' className='dbutton d-none d-sm-inline' onClick = { () => { fetchDestroy(props.npc.game, props.npc.id, props.update ) } }>Destroy</button>
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