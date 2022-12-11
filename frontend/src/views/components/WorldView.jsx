import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import ReadLocation from './ReadLocation';

function WorldView( props ) {

    const[locations, setLocations] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/locations/known/${props.game}/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => { setLocations(jsonRes.locations) })
    }, []);

    return (<>
    <h1>Locations</h1>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Map</th>
        </tr>
        { locations.map ( ( location ) => <ReadLocation location = { location }/> ) }
    </table>
    </div>
    </>);
}

export default WorldView;