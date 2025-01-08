import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'
import Blog from './pages/Blog.jsx'
import Contactus from './pages/Contactus.jsx'
import Appointment from './pages/Appointment.jsx'
import Ourtreat from './pages/Ourtreat.jsx'
import Products from './pages/Products.jsx'

function App() 
{
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/ourtreat" element={<Ourtreat />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
