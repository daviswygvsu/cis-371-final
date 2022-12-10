import React, {useState, useEffect} from 'react';
import { redirect, useNavigate, useParams } from "react-router-dom";
import Item from './Item';

function MyItems( props ){

    const[items, setItems] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`/items/${props.user}`).then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes => { setItems(jsonRes.items) })
    }, []);

    return (<>
    <h1>Inventory</h1>
    <div className='list'> 
    <table>
        <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Description</th>
        </tr>
        { items.map ( ( item ) => <Item item = { item } update = { setItems }/> ) }
    </table>
    <button onClick = {() => navigate(`/items/create/${props.user}`)}>Create</button>
    </div></>);
}

export default MyItems;