import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home'
import Login from './components/Login'
import Chat from './components/Chat'
import Notfound from './components/Notfound'



<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

const App = () => {
  return (

    
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/chat/:chatID" element={<Chat />} />

        <Route path="*" element={<Notfound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App