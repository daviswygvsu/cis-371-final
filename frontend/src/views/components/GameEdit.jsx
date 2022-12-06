import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function GameEdit ( ) {

    let { id } = useParams();
    const [game, setGame] = useState([]);

    useEffect(() => {
        fetch(`/games/${id}/`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setGame(jsonRes.game) })
    }, []);

    return (<form className = 'form' action = 'http://localhost:3000/games/mine'>
        <table>
            <tr>
                <td><label>Name:</label></td>
                <td><input type = 'text' defaultValue = { game.name } onChange = { ( e ) => game.name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>World:</label></td>
                <td><input type = 'text' defaultValue = { game.world } onChange = { ( e ) => game.world = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button type = 'submit' onClick={() => { sigEdit( game ) } }>Update</button>
    </form>
    );
}

function sigEdit( game ) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'game' : game })
    };
    fetch(`/games/edit/`, requestOptions);
}

export default GameEdit;