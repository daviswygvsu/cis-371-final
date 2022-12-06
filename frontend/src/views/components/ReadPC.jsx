import React from 'react';
import { useState, useEffect } from 'react';

function ReadPC( props ) {

    let [playerName, setPlayer] = useState("");
    let [gameName, setGame] = useState("");

    useEffect(() => {
        fetch(`/users/${props.pc.user}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(
            jsonRes => { setPlayer(jsonRes.user.name) }
        );
    }, []);

    useEffect(() => {
        fetch(`/games/${props.pc.game}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(
            jsonRes => { setGame(jsonRes.game.name) }
        );
    }, []);

    return(
        <tr>
            <td>{props.pc.name}</td>
            <td>{props.pc.portrait}</td>
            <td>{gameName}</td>
            <td>{props.pc.level}</td>
            <td>{props.pc.xp}</td>
            <td>{props.pc.gp}</td>
            <td>{playerName}</td>
        </tr>
    );
}

export default ReadPC;