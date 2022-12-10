import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Location from './Location';

function MyLocations( props ) {

    const[locations, setLocations] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/locations/${props.game}/`).then(res => {
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
            <th>Known</th>
        </tr>
        { locations.map ( ( location ) => <Location location = { location } update = {setLocations}/> ) }
    </table>
    <button className = 'cbutton' onClick = {() => navigate(`/locations/create/${props.game}`)}>+</button>
    </div>
    </>);
}

export default MyLocations;