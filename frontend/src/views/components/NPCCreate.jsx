import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function NPCCreate ( ) {

    let { gid } = useParams();

    let name = '';
    let portrait = '';
    let home = 0;
    let known = 0;

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
                <td><input type = 'text' onChange = { ( e ) => home = e.currentTarget.value }/></td>
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