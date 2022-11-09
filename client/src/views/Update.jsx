import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import DeleteButton from '../components/DeleteButton';

export default function Update(props) {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  console.log("update"+id);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        setProduct(res.data);
        console.log("update date loaded");
        setLoaded(true);
      })
  }, []);

  const updateProduct = (product) => {
    axios.put(`http://localhost:8000/api/product/${id}`, product)
      .then(res => {
        console.log(res);
        navigate("/");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <filedset> 
        <legend>
        <h3>Update a Product</h3>
        </legend>
        { loaded && 
          <ProductForm
            onSubmitProp={updateProduct}
            initTitle={product.title}
            initPrice={product.price}
            initDesc={product.description}
            button="Update" />
        }
        <Link to="/">Back</Link>
        <DeleteButton id={id} successCallback={() => navigate("/")} />
      </filedset>
    </div>
  );
};