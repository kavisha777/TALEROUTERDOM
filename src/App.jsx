import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from '../src/pages/Contact'
import FAQ from './pages/Faq'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Faq" element={<FAQ />} />
    </Routes>

<Footer />
    </>

    
  )
}

export default App