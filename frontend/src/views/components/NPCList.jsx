import React, {useState, useEffect} from 'react';
import ReadNPC from './ReadNPC';

function NPCList( ) {
    const[npcs, setNPCs] = useState([]);

    useEffect(() => {
        fetch('/characters/npcs').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => {setNPCs(jsonRes.npcs) })
    }, []);

    return (<>
    <h1>NPCs</h1>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Portrait</th>
            <th>Game</th>
            <th>Home</th>
            <th>Known</th>
        </tr>
        { npcs.map ( ( npc ) => <ReadNPC npc = { npc }/> ) }
    </table>
    
    </div>
    </>);
}

export default NPCList;