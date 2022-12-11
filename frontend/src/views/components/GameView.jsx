import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WorldView from './WorldView';
import NPCView from './NPCView';
import QuestView from './QuestView';

function GameView ( ) {

    let { id } = useParams();

    let [gameName, setGame] = useState("");

    useEffect(() => {
        fetch(`/games/${id}`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(
            jsonRes => { setGame(jsonRes.game.name) }
        );
    }, []);

    return(<>
    <h1>{gameName}</h1>
    <hr></hr>
    <WorldView game = {id}/>
    <NPCView game = {id}/>
    <QuestView game = {id}/>
    </>);
}

export default GameView;