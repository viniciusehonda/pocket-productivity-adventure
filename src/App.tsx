import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Layout from './components/layout/Layout'
import Profile from './pages/profile/Profile'
import { LocalStorageAdapter } from './adapters'
import { useSelector } from 'react-redux'
import { ProfileState } from './interfaces'
import { useDispatch } from 'react-redux'
import { setProfile } from './redux/profileSlice'

function App() {
  return (
    <div className="App">      
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </div>
  )
}

export default App
