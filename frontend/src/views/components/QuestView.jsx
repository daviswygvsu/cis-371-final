import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import ReadQuest from './ReadQuest';

function QuestView( props ) {

    const[quests, setQuests] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/quests/known/${props.game}/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => { setQuests(jsonRes.quests) })
    }, []);

    return (<>
    <h2>Quests</h2>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Level</th>
            <th className='d-none d-sm-block'>Description</th>
            <th>XP</th>
        </tr>
        { quests.map ( ( quest ) => <ReadQuest quest = { quest }/> ) }
    </table>
    </div>
    </>);
}

export default QuestView;