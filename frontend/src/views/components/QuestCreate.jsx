import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function QuestCreate ( ) {

    let { gid } = useParams();

    let name = '';
    let level = 0;
    let description = '';
    let xp = 0;
    let known = 0;

    return(<>
    <h1>Create a Quest</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
        <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' onChange = { ( e ) => name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Level: </label></td>
                <td><input type = 'text' onChange = { ( e ) => level = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Description: </label></td>
                <td><input type = 'textarea' onChange = { ( e ) => description = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>XP: </label></td>
                <td><input type = 'text' onChange = { ( e ) => xp = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => { sigCreate( {name : name, level : level, game : gid, description : description, xp : xp, known : known})}}> Create </button>
    </form>
    </>);
}

function sigCreate( desc ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'desc' : desc})
    };
    fetch(`/quests/create/`, requestOptions);
}

export default QuestCreate;