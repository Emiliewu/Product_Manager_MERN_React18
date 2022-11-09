import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';


export default function ProductList(props) {
  const {products, removeFromDom} = props;

  return (
    <div id="productlist">
      <h2>All Products</h2>
      { products.map(({_id, title}) => 
          <p className="product" key={_id}>
            <Link to={`/detail/${_id}`}>{ title }</Link>
            <Link to={'/edit/'+_id}>Edit</Link> | 
            <DeleteButton id={_id} successCallback={() => removeFromDom(_id)} />
          </p>)
      }
    </div>
  );
};