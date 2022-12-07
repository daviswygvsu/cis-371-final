import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import PC from './PC';

function MyPCs( ) {

    const[pcs, setPCs] = useState([]);

    useEffect(() => {
        fetch(`/characters/pcs/mine/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setPCs(jsonRes.pcs) })
    }, []);

    return (<div className='list'>
    <table>
        <tr>
            <th>Name</th>
            <th>Portrait</th>
            <th>Game</th>
            <th>Level</th>
            <th>XP</th>
            <th>GP</th>
            <th>User</th>
            <th></th>
        </tr>
        { pcs.map ( ( pc ) => <PC pc = { pc } update = {setPCs} /> ) }
    </table>
    </div>);
}

export default MyPCs;