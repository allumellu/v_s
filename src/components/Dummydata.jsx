import React from "react";
import Product from "./Product";
import "./Dummydata.css";
import products from "./Dummydata.json";
const ProductListDummy = () => {
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className='product-list-container'>
      <h2>Product List</h2>
      <div className='product-list'>
        <Product
          products={products.map((product) => ({
            key: product.id,
            product: product,
            onAddToCart: handleAddToCart,
          }))}
        />
      </div>
    </div>
  );
};

export default ProductListDummy;
