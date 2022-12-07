import React, {useState, useEffect} from 'react';
import { redirect, useNavigate } from "react-router-dom";

function Item (props) {

    let navigate = useNavigate();

    return(
        <tr>
            <td>{props.item.name}</td>
            <td>{props.item.owner}</td>
            <td>{props.item.value}</td>
            <td>{props.item.desc}</td>
            <button type = 'button' onClick = { () => { navigate(`/items/edit/${props.item.id}/`) } }>Edit</button> <button type = 'button' onClick = { () => { fetchDestroy( props.item.id, props.update ) } }>Destroy</button>
        </tr>
    );
}

function fetchDestroy ( id, update ) {
    fetch(`/items/destroy/${id}/`).then(res => {
        if (res.ok) {
            return res.json()
        }
    }).then(
        jsonRes => { update(jsonRes.items) }
    );
}

export default Item;