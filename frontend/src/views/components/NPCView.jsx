import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import ReadNPC from './ReadNPC';

function NPCView( props ) {

    const[npcs, setNPCs] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/characters/npcs/known/${props.game}/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => { setNPCs(jsonRes.npcs) })
    }, []);

    return (<>
    <h2>NPCs</h2>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Portrait</th>
            <th>Home</th>
        </tr>
        { npcs.map ( ( npc ) => <ReadNPC npc = { npc }/> ) }
    </table>
    </div>
    </>);
}

export default NPCView;