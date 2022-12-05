import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styles/PCForm.css';

function PCEdit ( ) {
    let { id } = useParams();
    const[pc, setPC] = useState([]);

    useEffect(() => {
        fetch(`/characters/pcs/${id}/`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => { setPC(jsonRes.pc) })
    }, []);

    return (<form className = 'form'>
        <table>
            <tr>
                <td><label>Name:</label></td>
                <td><input type = 'text' defaultValue = {pc.name} onChange = { ( e ) => pc.name = e.currentTarget.value}/></td>
            </tr>
        </table>
        <button onClick={() => { sigEdit( pc ) } }>Update</button>
    </form>
    );
}

function sigEdit( pc ) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'pc' : pc})
    };
    fetch(`/characters/pcs/edit/${pc.id}/`, requestOptions);
}

export default PCEdit;