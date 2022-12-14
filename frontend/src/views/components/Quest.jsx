import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function Quest (props){
    let navigate = useNavigate();

    return(
        <tr>
            <td>{props.quest.name}</td>
            <td>{props.quest.level}</td>
            <td className='d-none d-sm-block'>{props.quest.description}</td>
            <td>{props.quest.xp}</td>
            <td>{props.quest.known ? "Known" : "Unknown"}</td>
            <button className='d-none d-sm-inline' type = 'button' onClick = { () => { navigate(`/quests/edit/${props.quest.id}`) } }>Edit</button> <button type = 'button' className='dbutton d-none d-sm-inline' onClick = { () => { fetchDestroy(props.quest.game, props.quest.id, props.update ) } }>Destroy</button>
        </tr>
    )
}

function fetchDestroy (game, id, update){
    fetch(`/quests/destroy/${game}/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.quests) }
    );
}

export default Quest;