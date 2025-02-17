import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus.jsx'
import Blog from './pages/Blog.jsx'
import Contactus from './pages/Contactus.jsx'
import Appointment from './pages/Appointment.jsx'
import Ourtreat from './pages/Ourtreat.jsx'
import Products from './pages/Products.jsx'


import KidneyDisease from './diseasepages/kidneydisease.jsx'
import LiverDisease from './diseasepages/liverdisease.jsx'
import AllTypeOfCancers from './diseasepages/alltypeofcancers.jsx'
import Diabetic from './diseasepages/diabetic.jsx'
import Dengue from './diseasepages/dengue.jsx'
import Leptospirosis from './diseasepages/leptospirosis.jsx'
import Std from './diseasepages/std.jsx'
import Itp from './diseasepages/itp.jsx'
import Infertility from './diseasepages/infertility.jsx'
import Covid19 from './diseasepages/covid19.jsx'
import Sciatica from './diseasepages/sciatica.jsx'
import Nsd from './diseasepages/nsd.jsx'
import Migraine from './diseasepages/migraine.jsx'
import Lunginfection from './diseasepages/lunginfection.jsx'
import Lungdiseases from './diseasepages/lungdiseases.jsx'
import Catarrh from './diseasepages/catarrh.jsx'
import Arthritis from './diseasepages/arthritis.jsx'

import Header from './components/Home_Compo/header.jsx'
import Footer from './components/Home_Compo/footer.jsx'

function App()
{
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/ourtreat" element={<Ourtreat />} />
          <Route path="/products" element={<Products />} />


          <Route path="/kidneydisease" element={<KidneyDisease />} />
          <Route path="/liverdisease" element={<LiverDisease />} />
          <Route path="/alltypeofcancers" element={<AllTypeOfCancers />} />
          <Route path="/diabetic" element={<Diabetic />} />
          <Route path="/dengue" element={<Dengue />} />
          <Route path="/leptospirosis" element={<Leptospirosis />} />
          <Route path="/std" element={<Std />} />
          <Route path="/itp" element={<Itp />} />
          <Route path="/infertility" element={<Infertility />} />
          <Route path="/covid19" element={<Covid19 />} />
          <Route path="/sciatica" element={<Sciatica />} />
          <Route path="/nsd" element={<Nsd />} />
          <Route path="/migraine" element={<Migraine />} />
          <Route path="/lunginfection" element={<Lunginfection />} />
          <Route path="/lungdiseases" element={<Lungdiseases />} />
          <Route path="/catarrh" element={<Catarrh />} />
          <Route path="/arthritis" element={<Arthritis />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
