import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ItemCreate ( ) {

    let { pcid } = useParams();

    let name = '';
    let owner = 0;
    let value = 0;
    let desc = '';

    return(<>
    <h1>Create an Item</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
        <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' onChange = { ( e ) => name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Value: </label></td>
                <td><input type = 'text' onChange = { ( e ) => value = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Desc: </label></td>
                <td><input type = 'text' onChange = { ( e ) => desc = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => { sigCreate( {name : name, owner : pcid, value : value, desc : desc})}}> Create </button>
    </form>
    </>);
}

function sigCreate( desc ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'desc' : desc})
    };
    fetch(`/items/create/`, requestOptions);
}
export default ItemCreate;