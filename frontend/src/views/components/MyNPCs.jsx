import React, {useState, useEffect} from 'react';
import { redirect, useNavigate, useParams } from "react-router-dom";
import NPC from './NPC';

function MyNPCs( props ) {

    const[npcs, setNPCs] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/characters/npcs/${props.game}/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => { setNPCs(jsonRes.npcs) })
    }, []);

    return (<div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Portrait</th>
            <th>Game</th>
            <th>Home</th>
            <th>Known</th>
        </tr>
        { npcs.map ( ( npc ) => <NPC npc = { npc } update = {setNPCs}/> ) }
    </table>
    <button onClick = {() => navigate(`/npcs/create/${props.game}`)}>Create</button>
    </div>);
}

export default MyNPCs;