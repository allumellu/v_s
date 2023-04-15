import React, { useState } from "react";
import "./Addproduct.css";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCost, setProductCost] = useState("");
  const [category, setCategory] = useState("");
  const [numInStock, setNumInStock] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [productType, setProductType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className='shop-container'>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='productName'>Product Name:</label>
        <input
          type='text'
          id='productName'
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          required
        />
        <label htmlFor='productCost'>Product Cost:</label>
        <input
          type='number'
          id='productCost'
          value={productCost}
          onChange={(event) => setProductCost(event.target.value)}
          required
        />
        <label htmlFor='category'>Category:</label>
        <input
          type='text'
          id='category'
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />
        <label htmlFor='numInStock'>Number in Stock:</label>
        <input
          type='number'
          id='numInStock'
          value={numInStock}
          onChange={(event) => setNumInStock(event.target.value)}
          required
        />
        <label htmlFor='image'>Image:</label>
        <input
          type='file'
          id='image'
          onChange={(event) => setImage(event.target.files[0])}
          required
        />
        <label htmlFor='description'>Description:</label>
        <textarea
          id='description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <label htmlFor='dimensions'>Dimensions:</label>
        <input
          type='text'
          id='dimensions'
          value={dimensions}
          onChange={(event) => setDimensions(event.target.value)}
          required
        />
        <label htmlFor='productType'>Product Type:</label>
        <select
          id='productType'
          value={productType}
          onChange={(event) => setProductType(event.target.value)}
          required>
          <option value=''>Select</option>
          <option value='new'>New</option>
          <option value='refurbished'>Refurbished</option>
        </select>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
