import React from 'react'
import { useNavigate} from"react-router-dom";

const login = (props) => {
    const setIsLoggedIn= props.setIsLoggedIn;
    const navigate= useNavigate();

    const handleLogin= () =>{
        alert("User logged in");
        navigate("/")
    }
  return (
    <>
    <div>Login page</div>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default login