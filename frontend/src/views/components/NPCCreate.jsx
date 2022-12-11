import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function NPCCreate ( ) {

    let { gid } = useParams();
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch(`/locations/${gid}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setLocations(jsonRes.locations) });

    }, []);

    let name = '';
    let portrait = '';
    let home = 0;
    let known = 0;

    let homeOptions = locations.map((location) => <option value = {location.id}>{location.name}</option>);

    return(<>
    <h1>Create an NPC</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
        <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' onChange = { ( e ) => name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Portrait </label></td>
                <td><input type = 'text' onChange = { ( e ) => portrait = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Home: </label></td>
                <select onChange = { (e) => home = e.currentTarget.value }>
                    {homeOptions}
                </select>
            </tr>
        </table>
        <button onClick={() => { sigCreate( {name : name, portrait : portrait, game : gid, home : home, known : known})}}> Create </button>
    </form>
    </>);
}


function sigCreate( desc ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'desc' : desc})
    };
    fetch(`/characters/npcs/create/`, requestOptions);
}

export default NPCCreate;