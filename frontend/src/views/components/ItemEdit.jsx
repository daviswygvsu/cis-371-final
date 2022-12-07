import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ItemEdit ( ) {

    let { id } = useParams();
    const[item, setItem] = useState([]);

    useEffect(() => {
        fetch(`/items/${id}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setItem(jsonRes.item) })
    }, []);

    return(<>
    <h1>Edit Item</h1>
    <form className = 'form' action = 'http://localhost:3000/'>
        <table>
            <tr>
                <td><label>Name: </label></td>
                <td><input type = 'text' defaultValue = {item.name} onChange = { ( e ) => item.name = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Value: </label></td>
                <td><input type = 'text' defaultValue = {item.value} onChange = { ( e ) => item.value = e.currentTarget.value }/></td>
            </tr>
            <tr>
                <td><label>Desc: </label></td>
                <td><input type = 'text' defaultValue = {item.desc} onChange = { ( e ) => item.desc = e.currentTarget.value }/></td>
            </tr>
        </table>
        <button onClick={() => { sigEdit( item )}}> Update </button>
    </form>
    </>);
}

function sigEdit( item ) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({ 'item' : item})
    };
    fetch(`/items/edit/`, requestOptions);
}
export default ItemEdit;