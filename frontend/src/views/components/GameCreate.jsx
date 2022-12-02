import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/GameForm.css';

function GameCreate ( ) {

    let name = '';
    let world = '';
    let gm = 0;
    

    return (<form className = 'form'>
        <table>
            <tr>
                <td><label>Name:</label></td>
                <td><input type = 'text' onChange = { ( e ) => name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>World:</label></td>
                <td><input type = 'text' onChange = { ( e ) => world = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>GM:</label></td>
                <td><input type = 'text' onChange = { ( e ) => gm = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => { sigCreate( { name : name, world : world, gm : gm } ) } }>Create</button>
    </form>
    );
}

function sigCreate( desc ) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'desc' : desc })
    };
    fetch(`/games/create/`, requestOptions);
}

export default GameCreate;