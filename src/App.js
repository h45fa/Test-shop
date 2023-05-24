import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Burgerzon from "./components/burgerzon";
import Cart from "./components/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (value) => {
    if (cart.indexOf(value) !== -1) return;
    setCart([...cart, value]);
    console.log(cart)
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} />
      {show ? <Burgerzon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
    </React.Fragment>
  );
};

export default App;
