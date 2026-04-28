import React, { useState } from "react";

const Shopping = () => {

  // 🔹 state for input
  const [item, setItem] = useState("");

  // 🔹 state for cart items
  const [cart, setCart] = useState([]);

  // 🔹 input change handle
  const handleChange = (e) => {
    setItem(e.target.value); // jo user type karega wo store hoga
  };

  // 🔹 add item to cart
  const handleAdd = () => {
    if (item.trim() === "") return; // empty item allow nahi

    setCart([...cart, item]); // purane items + new item
    setItem(""); // input clear
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* 🔥 1. INPUT SECTION */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Add Item</h2>

        <input
          type="text"
          placeholder="Enter product"
          value={item} // controlled input
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add</button>
      </div>


      {/* 🔥 2. CART SECTION */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Cart Items</h2>

        <ul>
          {
            cart.map((val, index) => (
              <li key={index}>{val}</li> // dynamic list
            ))
          }
        </ul>
      </div>


      {/* 🔥 3. CHECKOUT FOOTER */}
      <div style={{ borderTop: "1px solid gray", paddingTop: "10px" }}>
        <h3>Total Items: {cart.length}</h3>

        <button>Checkout</button>
      </div>

    </div>
  );
};

export default Shopping;