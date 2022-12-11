import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function ReadQuest (props){

    return(
        <tr>
            <td>{props.quest.name}</td>
            <td>{props.quest.level}</td>
            <td className='d-none d-sm-block'>{props.quest.description}</td>
            <td>{props.quest.xp}</td>
        </tr>
    )
}

export default ReadQuest;