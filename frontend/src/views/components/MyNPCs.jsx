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

    return (<>
    <h1>NPCs</h1>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Portrait</th>
            <th>Home</th>
            <th>Known</th>
        </tr>
        { npcs.map ( ( npc ) => <NPC npc = { npc } update = {setNPCs}/> ) }
    </table>
    <button className = 'cbutton' onClick = {() => navigate(`/npcs/create/${props.game}`)}>+</button>
    </div>
    </>);
}

export default MyNPCs;