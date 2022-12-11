import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function ReadLocation (props){

    return(
        <tr>
            <td>{props.location.name}</td>
            <td>{props.location.map}</td>
        </tr>
    )
}

export default ReadLocation;