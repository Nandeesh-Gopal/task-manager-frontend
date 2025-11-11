import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './comp/Home.jsx';
import Signup from './comp/Signup.jsx';
import Login  from './comp/Login.jsx';
import CreateMember from './comp/CreateMember.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/create-member" element={<CreateMember/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
