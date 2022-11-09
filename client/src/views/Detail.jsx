import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

export default function Detail(props) {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const { _id, title, price, description } = product;
    const navigate = useNavigate();
    console.log("detail"+id);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, []);
    console.log(product);

    return (
        <div className="detail">
            <h2>{ title }</h2>
            <p>Price: { price }</p>
            <p>Description: { description }</p>
            <Link to={`/edit/${_id}`}>Edit</Link>
            <Link to="/">Back</Link>
            <DeleteButton id={_id} successCallback={() => navigate("/")} />
        </div>
    )
};