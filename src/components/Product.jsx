import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({ products, onAddToCart }) => {
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    onAddToCart(product);
  };

  return (
    <div className='product-list'>
      {products
        ? products.map((product) => (
            <div key={product.id} className='product-card'>
              <div className='product-image'>
                <img src={product.image} alt={product.name} />
              </div>
              <div className='product-details'>
                <h3 className='product-name'>{product.name}</h3>
                {/* <p className='product-price'>{`$${
              product.price ? product.price.toFixed(2) : ""
            }`}</p> */}
                <button
                  className='add-to-cart-button'
                  onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.any,
      price: PropTypes.any,
      image: PropTypes.any,
    })
  ),
  onAddToCart: PropTypes.func,
};

export default Product;
