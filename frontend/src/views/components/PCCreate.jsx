import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PCCreate ( ) {

    let { gid } = useParams();

    let name = '';
    let portrait = '';
    let game = gid;
    let level = 0;
    let xp = 0;
    let gp = 0;

    return(<>
    <h1>Create a PC</h1>
    <form className = 'form' action = 'http://localhost:3000/pcs/mine/'>
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
                <td><label>Level: </label></td>
                <td><input type = 'text' onChange = { ( e ) => level = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>XP: </label></td>
                <td><input type = 'text' onChange = { ( e ) => xp = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>GP: </label></td>
                <td><input type = 'text' onChange = { ( e ) => gp = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => { sigCreate( {name : name, portrait : portrait, game : game, level : level, xp : xp, gp : gp})}}> Create </button>
    </form>
    </>);
}


function sigCreate( desc ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'desc' : desc})
    };
    fetch(`/characters/pcs/create/`, requestOptions);
}

export default PCCreate;