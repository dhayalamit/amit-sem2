// import React from "react";
// const Inputbox=()=>{
//     const handlechange=(e)=>{
//         setInputText(e.target.value);
//     };
//     const handleclick=()=>{
//         alert(inputText);
//     }
//     return(
//         <>
//         <h2>Input Box</h2>
//         <input type='text'
//         placeholder="type"
//         value={inputText}
//         onChange={(e)=>setInputText(e.target.value)}
//         ></input>
//         <button onClick={handleclick}>click</button>
//         </>
//     );
// };
// export default Inputbox;

import React, { useState } from "react";

const Inputbox = () => {

  const [inputText, setInputText] = useState(""); 

  const handlechange = (e) => {
    setInputText(e.target.value);
  };

  const handleclick = () => {
    alert(inputText);
  };

  return (
    <>
      <h2>Input Box</h2>

      <input
        type="text"
        placeholder="type"
        value={inputText}
        onChange={handlechange}
      />

      <button onClick={handleclick}>click</button>
    </>
  );
};

export default Inputbox;