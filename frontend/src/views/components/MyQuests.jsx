import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Quest from './Quest';

function MyQuests( props ) {

    const[quests, setQuests] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/quests/${props.game}/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => { setQuests(jsonRes.quests) })
    }, []);

    return (<>
    <h1>Quests</h1>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Game</th>
            <th>Description</th>
            <th>XP</th>
            <th>Known</th>
        </tr>
        { quests.map ( ( quest ) => <Quest quest = { quest } update = {setQuests}/> ) }
    </table>
    <button onClick = {() => navigate(`/quests/create/${props.game}`)}>Create</button>
    </div>
    </>);
}

export default MyQuests;