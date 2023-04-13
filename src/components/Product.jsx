import React from "react";
import PropTypes from "prop-types";

const Product = ({ product, onAddToCart }) => {
  const { name, price, image } = product;

  const handleAddToCart = () => {
    console.log(`Added ${name} to cart`);
    onAddToCart(product);
  };

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={image} alt={name} />
      </div>
      <div className='product-details'>
        <h3 className='product-name'>{name}</h3>
        <p className='product-price'>{`$${price ? price.toFixed(2) : ""}`}</p>
        <button className='add-to-cart-button' onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Product;