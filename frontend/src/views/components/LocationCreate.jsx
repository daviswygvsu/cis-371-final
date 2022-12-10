import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function LocationCreate ( ) {

    let { gid } = useParams();

    let name = '';
    let map = '';
    let known = 0;

    return(<>
    <h1>Create a Location</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
        <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' onChange = { ( e ) => name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Map: </label></td>
                <td><input type = 'text' onChange = { ( e ) => map = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => { sigCreate( {name : name, game : gid, map : map, known : known})}}> Create </button>
    </form>
    </>);
}

function sigCreate( desc ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'desc' : desc})
    };
    fetch(`/locations/create/`, requestOptions);
}

export default LocationCreate;