import React from 'react';
import axios from 'axios';

export default function DeleteButton(props) {
    const { id, successCallback } = props;
    const handleDelete = () => {
      axios.delete('http://localhost:8000/api/product/'+id)
        .then( _ => successCallback())
        .catch(err => console.log(err));
    }
    return <button id="delBtn" onClick={handleDelete}>Delete</button>;
};