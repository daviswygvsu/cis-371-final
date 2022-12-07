import React, {useState, useEffect} from 'react';
import ReadPC from './ReadPC';

function PCList( ) {
    const[pcs, setPCs] = useState([]);

    useEffect(() => {
        fetch('/characters/pcs').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => {setPCs(jsonRes.pcs) })
    }, []);

    return (<>
    <h1>PCs</h1>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Portrait</th>
            <th>Game</th>
            <th>Level</th>
            <th>XP</th>
            <th>GP</th>
            <th>User</th>
        </tr>
        { pcs.map ( ( pc ) => <ReadPC pc = { pc }/> ) }
    </table>
    
    </div>
    </>);
}

export default PCList;