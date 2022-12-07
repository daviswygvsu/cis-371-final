import React, {useState, useEffect} from 'react';

function Signup ( ) {

    let name = '';
    let password = '';

    const handleClick = ( desc ) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'desc' : desc })
        };
        fetch(`/users/create/`, requestOptions);
    }

    return (<>
    <h1>Sign Up</h1>
    <form className = 'form' action='http://localhost:3000/'>
        <table>
            <tr>
                <td><label>Username:</label></td>
                <td><input type = 'text' onChange = { ( e ) => name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Password:</label></td>
                <td><input type = 'password' onChange = { ( e ) => password = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button type = 'submit' onClick = { () => handleClick( { name : name, password : password } )}>Sign Up</button>
    </form>
    </>);
}

export default Signup;