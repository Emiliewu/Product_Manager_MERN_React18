import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  }, []);

  const removeFromDom = (id) => {
    setProducts(products.filter(product => product._id !== id));
  };
  const createProduct = (product) => {
    axios.post('http://localhost:8000/api/products', product)
        .then(res => setProducts([...products, res.data]))
        .catch(err => console.log(err));
  };
  
  return (
    <div id="main">
      <h3>Product Manager</h3>
      <ProductForm onSubmitProp={createProduct} initTitle="" initPrice="" initDesc="" button="Create" />
      {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
    </div>
  );
};