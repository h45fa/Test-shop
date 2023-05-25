import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      name,
      email,
      number,
      address,
      price,
    };
    if (name.trim() === "") {
      alert("Empty host name");
    } else if (number.trim() === "") {
      alert("Empty name");
    } else if (address.trim() === "") {
      alert("Empty port");
    } else {
      fetch("https://63d81aa75dbd72324433552c.mockapi.io/cart", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("ready");
        });
    }
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <section class="main-content">
      <article class="left-content">
        <form class="form-form">
          <div class="Name-d">
            <h3>Name</h3>
            <input type="text" onChange={(event) => setName(event.target.value)}></input>
          </div>
          <div class="mail-d">
            <h3>E-mail</h3>
            <input type="email" onChange={(event) => setEmail(event.target.value)}></input>
          </div>
          <div class="Phone-d">
            <h3>Phone</h3>
            <input type="text" onChange={(event) => setNumber(event.target.value)}></input>
          </div>
          <div class="Address-d">
            <h3>Address</h3>
            <input type="text" onChange={(event) => setAddress(event.target.value)}></input>
          </div>
        </form>
      </article>
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </article>
      <button class="SubmitBtn ml-52" onClick={handleSubmit}>Submit</button>
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>{price}$</span>
      </div>
    </section>
  );
};

export default Cart;
