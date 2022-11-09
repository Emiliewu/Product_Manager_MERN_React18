import React, { useState } from 'react';

export default function ProductForm(props) {
  const { initTitle, initPrice, initDesc, onSubmitProp, button } = props;
  const [title, setTitle] = useState(initTitle); 
  const [price, setPrice] = useState(initPrice); 
  const [description, setDescription] = useState(initDesc); 
  const [errors, setErrors] = useState();
  console.log(initPrice);
  console.log(initTitle);
  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    if (!title.trim() || !price || !description.trim() || price < 0) {
      setErrors("Please review your inputs");
      return;
    }
    onSubmitProp({title, price, description});
    setTitle('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
    {errors ? <p className="error-tag">{errors}</p> : <p></p>}
      <div className="form-row">
        <label>Title</label>
        <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>
      <div className="form-row">
        <label>Price</label>
        <input type="number" name="price" step="0.01" value={price} onChange={(e)=>setPrice(e.target.value)}/>
      </div>
      <div className="form-row">
        <label>Description</label>
        <input type="text" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>
      <div id="button">
        <button>{button}</button>
      </div>
    </form>
  );
};