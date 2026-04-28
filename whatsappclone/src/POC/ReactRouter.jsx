import React, { useState } from 'react'

const ReactRouter = () => {
    const[ isLoggedIn, setIsLoggedIn]= useState(false);

  return (
    <>
    <div>ReactRouter</div>
    <Routes>
        <Route
        path="/"
        element={< ProtectedRoute isLoggedIn={isLoggedIn}/>}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
    </Routes>
    </>
  );
};
function ProtectedRoute(props){
    const isLoggedIn= props.isLoggedIn;
    if(isLoggedIn){
        return<Home />;
    } else{
        return<Navigate to =""/>
    }
}

export default ReactRouter