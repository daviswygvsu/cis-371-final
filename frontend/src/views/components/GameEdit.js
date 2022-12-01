import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/GameForm.css';

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

    return (<form className = 'form'>
        <table>
            <tr>
                <td><label>Name:</label></td>
                <td><input type = 'text' defaultValue = { game.name } onChange = { ( e ) => game.name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>World:</label></td>
                <td><input type = 'text' defaultValue = { game.world } onChange = { ( e ) => game.world = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>GM:</label></td>
                <td><input type = 'text' defaultValue = { game.gm } onChange = { ( e ) => game.gm = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => sigDel( game )}>Update</button>
    </form>
    );
}

function sigDel( game ) {
    fetch(`/games/update/${game.id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { /* Navigate back to main page */ }
    );
}

export default GameEdit;