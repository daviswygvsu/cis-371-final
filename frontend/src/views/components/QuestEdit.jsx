import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function QuestEdit ( ) {

    let { id } = useParams();
    const[quest, setQuest] = useState([]);

    useEffect(() => {
        fetch(`/quests/find/${id}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setQuest(jsonRes.quest) })
    }, []);

    return(<>
    <h1>Edit Quest</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
    <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' defaultValue = { quest.name } onChange = { ( e ) => quest.name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Level: </label></td>
                <td><input type = 'text' defaultValue = { quest.level } onChange = { ( e ) => quest.level = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Description: </label></td>
                <td><input type = 'textarea' defaultValue = { quest.description } onChange = { ( e ) => quest.description = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>XP: </label></td>
                <td><input type = 'text' defaultValue = { quest.xp } onChange = { ( e ) => quest.xp = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => { sigEdit( quest )}}> Update </button>
    </form>
    </>);
}


function sigEdit( quest ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'quest' : quest})
    };
    fetch(`/quests/edit/`, requestOptions);
}

export default QuestEdit;