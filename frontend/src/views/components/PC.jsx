import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function PC (props ){

    let [gameName, setGame] = useState("");

    useEffect(() => {
        fetch(`/games/${props.pc.game}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(
            jsonRes => { setGame(jsonRes.game.name) }
        );
    }, []);

    let navigate = useNavigate();

    return(
        <tr>
            <td>{props.pc.name}</td>
            <td>{props.pc.portrait}</td>
            <td>{gameName}</td>
            <td>{props.pc.level}</td>
            <td>{props.pc.xp}</td>
            <td>{props.pc.gp}</td>
            <button type = 'button' onClick = { () => { navigate(`/games/${props.pc.game}`) } }>View Game</button><button type = 'button' className='d-none d-sm-inline' onClick = { () => { navigate(`/pcs/edit/${props.pc.id}`) } }>Edit</button><button type = 'button' className='dbutton d-none d-sm-inline' onClick = { () => { fetchDestroy( props.pc.id, props.update ) } }>Destroy</button>
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