import React from "react";

const Navbar = ({ setShow }) => {
  return (
    <nav>
      <div className="flex w-full h-24 justify-evenly bg-gray-800 text-white font-sans text-3xl items-center">
        <span onClick={() => setShow(true)} class="cursor-pointer">
          My Shoping
        </span>
        <span class="cursor-pointer" onClick={() => setShow(false)}>
          Shoping Cart
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
