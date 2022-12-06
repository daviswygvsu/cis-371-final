import React from 'react';

function ReadNPC( props ) {

    return(
        <tr>
            <td>{props.npc.name}</td>
            <td>{props.npc.portrait}</td>
            <td>{props.npc.game}</td>
            <td>{props.npc.home}</td>
            <td>{props.npc.known}</td>
        </tr>
    );
}

export default ReadNPC;