import React, {useState, useEffect} from 'react';
import '../../styles/Login.css';

function Login ( ) {

    let name = '';
    let password = '';

    const handleClick = ( desc ) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'desc' : desc })
        };
        fetch(`/users/login/`, requestOptions);
    }

    return (<form className = 'form'>
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
        <button onClick = { () => handleClick( { name : name, password : password } )}>Log in</button>
    </form>
    );
}

export default Login;