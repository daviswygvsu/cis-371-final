import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function NPCEdit ( ) {

    let { id } = useParams();
    const [locations, setLocations] = useState([]);
    const[npc, setNPC] = useState([]);

    useEffect(() => {
        fetch(`/characters/npc/${id}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setNPC(jsonRes.npc) });

    }, []);

    useEffect(() => {

        if (npc.game) {
            fetch(`/locations/${npc.game}/`).then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(jsonRes => { setLocations(jsonRes.locations) });
        }

    }, [npc]);

    if (npc.game) {
        fetch(`/locations/${npc.game}/`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setLocations(jsonRes.locations) });
    }

    let homeOptions = locations.map((location) => <option value = {location.id}>{location.name}</option>);

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
                <select onChange = { (e) => npc.home = e.currentTarget.value}>
                    {homeOptions}
                </select>
            </tr>
            <tr>
                <td><label>Known: </label></td>
                <select onChange = { ( e ) => { npc.known = e.currentTarget.value; } }>
                    <option value={0}>Unknown</option>
                    <option value={1}>Known</option>
                </select>
            </tr>
        </table>
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