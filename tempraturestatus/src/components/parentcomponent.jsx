import React, { useState } from "react";
import ChildComponent from "./childcomponent";

const ParentComponent = () => {

  const [temp, setTemp] = useState(""); // MUST

  return (
  <div className="container">
    <h1 className="title">Temperature Checker</h1>

    <input
      className="input"
      type="text"
      placeholder="Enter temperature"
      value={temp}
      onChange={(e) => setTemp(e.target.value)}
    />

    <ChildComponent temp={temp} />
  </div>
);
};

export default ParentComponent;