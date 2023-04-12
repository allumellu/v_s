import React from "react";

const Cart = ({ cart, totalAmount, onRemoveFromCart }) => {
  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      <div className='cart-list'>
        {cart.map((product) => (
          <div className='cart-item' key={product.id}>
            <div className='cart-item-details'>
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
            <div className='cart-item-remove'>
              <button onClick={() => onRemoveFromCart(product)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className='cart-total'>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
