import React from "react";
import Product from "./Product";

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
  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;
