import React, {useState, useEffect} from 'react';
import { redirect, useNavigate, useParams } from "react-router-dom";
import PC from './PC';
import '../../styles/PCList.css';

function MyPCs( ) {

    let { id } = useParams();
    const[pcs, setPCs] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/characters/pcs/mine/${id}/`).then(res => {
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
    <button onClick = {() => navigate(`/pcs/create/${id}`)}>Create</button>
    </div>);
}

export default MyPCs;