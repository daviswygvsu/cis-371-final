import React from 'react';
import '../../styles/GameList.css';
import { useState, useEffect } from 'react';

function ReadGame( props ) {

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
    </tr>
    );
}



export default ReadGame;