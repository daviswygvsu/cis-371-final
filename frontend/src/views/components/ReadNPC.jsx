import React, {useState, useEffect} from 'react';

function ReadNPC( props ) {

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
        </tr>
    );
}

export default ReadNPC;