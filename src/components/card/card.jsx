
import { useState } from "react";
import "./card.css";
import { PRODUCTS_DATA } from "../Products/productsData";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

// For demo, we'll use 2 sample products
const sampleCartItems = [
  { product: PRODUCTS_DATA[0], size: 36, quantity: 1 },
  { product: PRODUCTS_DATA[1], size: 36, quantity: 1 }
];

export default function Checkout() {
  const [cart, setCart] = useState(sampleCartItems);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-left">
          <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
          <div className="cart-title">
            <h1>YOUR CART</h1>
            <div className="cart-login-prompt">
              <p>Have an account?</p>
              <Link to="/login">Log in to check out faster.</Link>
            </div>
          </div>

          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.product.images[0]} alt={item.product.name} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <div className="cart-item-info">
                      <h3>{item.product.name}</h3>
                      <p className="cart-item-price">{item.product.price} €</p>
                    </div>
                  </div>
                  <div className="cart-item-size">
                    <p>Size: {item.size}</p>
                  </div>
                  <button 
                    className="cart-item-remove"
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-total">
                  <p>{item.product.price} €</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="checkout-right">
          <div className="checkout-summary">
            <div className="checkout-total">
              <span>Total</span>
              <span>{calculateTotal()} €</span>
            </div>
            <button className="checkout-btn">Check out</button>
            <div className="payment-methods">
              <button className="payment-btn shop-btn">shop</button>
              <button className="payment-btn paypal-btn">PayPal</button>
            </div>
            <p className="checkout-note">
              Taxes included. Discounts and shipping calculated at checkout.
            </p>
          </div>
        </div>
      </div>
     
    </div>
     <Footer />
     </>
  );
}
