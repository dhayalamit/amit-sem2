import React from "react";

const ChildComponent = ({ temp }) => {

  const numTemp = Number(temp);

  if (temp === "" || isNaN(numTemp)) {
    return <h2 className="status error">Enter valid temperature</h2>;
  }

  return (
    <h2 className={`status ${numTemp > 35 ? "hot" : "normal"}`}>
      {numTemp > 35 ? "🔥 Hot" : "🙂 Normal"}
    </h2>
  );
};

export default ChildComponent;