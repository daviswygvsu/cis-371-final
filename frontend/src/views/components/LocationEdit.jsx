import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function LocationEdit ( ) {

    let { id } = useParams();
    const[location, setLocation] = useState([]);

    useEffect(() => {
        fetch(`/locations/find/${id}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setLocation(jsonRes.location) })
    }, []);

    return(<>
    <h1>Edit Location</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
    <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' defaultValue = { location.name } onChange = { ( e ) => location.name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Map: </label></td>
                <td><input type = 'text' defaultValue = { location.map } onChange = { ( e ) => location.map = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Known: </label></td>
                <select onChange = { ( e ) => location.known = e.currentTarget.value}>
                    <option value={0}>Unknown</option>
                    <option value={1}>Known</option>
                </select>
            </tr>
        </table>
        <button onClick={() => { sigEdit( location )}}> Update </button>
    </form>
    </>);
}


function sigEdit( location ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'location' : location})
    };
    fetch(`/locations/edit/`, requestOptions);
}

export default LocationEdit;