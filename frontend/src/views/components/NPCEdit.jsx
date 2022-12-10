import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function NPCEdit ( ) {

    let { id } = useParams();
    const[npc, setNPC] = useState([]);

    useEffect(() => {
        fetch(`/characters/npc/${id}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setNPC(jsonRes.npc) })
    }, []);

    const bLabel = npc.known ? "Hide from players" : "Reveal to Players";

    return(<>
    <h1>Edit NPC</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
        <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' defaultValue = { npc.name } onChange = { ( e ) => npc.name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Portrait </label></td>
                <td><input type = 'text' defaultValue = { npc.portrait } onChange = { ( e ) => npc.portrait = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Home: </label></td>
                <td><input type = 'text' defaultValue = { npc.home } onChange = { ( e ) => npc.home = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button type='button' onClick={() => {npc.known = npc.known ? 0 : 1}}>{bLabel}</button>
        <button onClick={() => { sigEdit( npc )}}> Update </button>
    </form>
    </>);
}


function sigEdit( npc ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'npc' : npc})
    };
    fetch(`/characters/npcs/edit/`, requestOptions);
}

export default NPCEdit;