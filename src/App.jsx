import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import Userdetail from './components/Userdetail'
import { useState } from 'react'
const App = () => {

  return (
    <div>

      <nav className='flex justify-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/about'>About</Link>
      </nav>
      <hr /><hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Home />
    </div>
  )
}

export default App
