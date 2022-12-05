import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/PCForm.css';

function PCEdit ( ) {
    let { id } = useParams();
    const[pc, setPC] = useState([]);

    useEffect(() => {
        fetch(`/characters/pcs/${id}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setPC(jsonRes.pc) })
    }, []);

    return (<form className = 'form'>
        <table>
            <tr>
                <td><label>Name:</label></td>
                <td><input type = 'text' defaultValue = {pc.name} onChange = { ( e ) => pc.name = e.currentTarget.value}/></td>
            </tr>
            <tr>
                <td><label>Portrait:</label></td>
                <td><input type = 'text' defaultValue = {pc.portrait} onChange = { ( e ) => pc.portrait = e.currentTarget.value}/></td>
            </tr>
            <tr>
                <td><label>Game:</label></td>
                <td><input type = 'text' defaultValue = {pc.game} onChange = { ( e ) => pc.game = e.currentTarget.value}/></td>
            </tr>
            <tr>
                <td><label>Level:</label></td>
                <td><input type = 'text' defaultValue = {pc.level} onChange = { ( e ) => pc.level = e.currentTarget.value}/></td>
            </tr>
            <tr>
                <td><label>XP:</label></td>
                <td><input type = 'text' defaultValue = {pc.xp} onChange = { ( e ) => pc.xp = e.currentTarget.value}/></td>
            </tr>
            <tr>
                <td><label>GP:</label></td>
                <td><input type = 'text' defaultValue = {pc.gp} onChange = { ( e ) => pc.gp = e.currentTarget.value}/></td>
            </tr>
        </table>
        <button onClick={() => { sigEdit( pc ) } }>Update</button>
    </form>
    );
}

function sigEdit( pc ) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'pc' : pc})
    };
    fetch(`/characters/pcs/edit/${pc.id}/`, requestOptions);
}

export default PCEdit;