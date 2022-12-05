import React from 'react';
import '../../styles/PCList.css';

function ReadPC( props ) {

    return(
        <tr>
            <td>{props.pc.name}</td>
            <td>{props.pc.portrait}</td>
            <td>{props.pc.game}</td>
            <td>{props.pc.level}</td>
            <td>{props.pc.xp}</td>
            <td>{props.pc.gp}</td>
            <td>{props.pc.user}</td>
        </tr>
    );
}

export default ReadPC;