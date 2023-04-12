import React from "react";
import PropTypes from "prop-types";
// import product from "Dummydata";
// const Product = ({ product, onAddToCart }) => {
const Product = ({ onAddToCart }) => {
  // const { name, price, image } = product;
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 12.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 15.99,
      image: "https://via.placeholder.com/150",
    },
  ];
  const ProductList = () => {
    const handleAddToCart = (products) => {
      console.log(`Added ${products.name} to cart`);
    };

    return (
      <div className='product-card'>
        <div className='product-image'>
          <img src={products.image} alt={products.name} />
        </div>
        <div className='product-details'>
          <h3 className='product-name'>{products.name}</h3>
          <p className='product-price'>{`$${products.price.toFixed(2)}`}</p>
          <button
            className='add-to-cart-button'
            onClick={() => handleAddToCart(products)}>
            Add to cart
          </button>
        </div>
        {products.map((product) => (
          <div>
            <>{product.id}</>
            <>{product.name}</>
            <>{handleAddToCart}</>
          </div>
        ))}
      </div>
    );
  };

  Product.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
  };
};
export default Product;
