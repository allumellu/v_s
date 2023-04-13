import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product";
import Cart from "../logged_in_user/Cart";
import Payment from "./Payment";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const newTotalAmount = cart.reduce(
      (accumulator, currentItem) => accumulator + currentItem.price,
      0
    );
    setTotalAmount(newTotalAmount);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productToRemove.id)
    );
  };

  const handlePaymentSuccess = (responseData) => {
    setPaymentSuccess(true);
    setCart([]);
    setTotalAmount(0);
  };

  return (
    <div className='shop-container'>
      <div className='product-list-container'>
        <h2>Products</h2>
        <div className='product-list'>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <Cart
        cart={cart}
        totalAmount={totalAmount}
        onRemoveFromCart={removeFromCart}
      />
      {cart.length > 0 && (
        <Payment
          totalAmount={totalAmount}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
      {paymentSuccess && (
        <div className='payment-success-message'>Payment successful!</div>
      )}
    </div>
  );
};

export default Shop;
