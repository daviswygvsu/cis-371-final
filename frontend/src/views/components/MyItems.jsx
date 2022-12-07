import React, {useState, useEffect} from 'react';
import { redirect, useNavigate, useParams } from "react-router-dom";
import Item from './Item';

function MyItems( props ){

    const[items, setItems] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/items/`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => { setItems(jsonRes.items) })
    }, []);

    return (<div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Value</th>
            <th>Desc</th>
        </tr>
        { items.map ( ( item ) => <Item item = { item } /> ) }
    </table>
    <button onClick = {() => navigate(`/items/create/${props.user}`)}>Create</button>
    </div>);
}

export default MyItems;