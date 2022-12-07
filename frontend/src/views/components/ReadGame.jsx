import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ReadGame( props ) {

    const navigate = useNavigate();

    let [gmName, setGM] = useState("");

    useEffect(() => {
        fetch(`/users/${props.game.gm}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(
            jsonRes => { setGM(jsonRes.user.name) }
        );
    }, []);

    return (
    <tr>
        <td>{props.game.name}</td>
        <td>{props.game.world}</td>
        <td>{gmName}</td>
        <button onClick = {() => navigate(`/pcs/create/${props.game.id}`)}>Join</button>
    </tr>
    );
}



export default ReadGame;