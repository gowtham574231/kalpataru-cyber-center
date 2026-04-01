import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import CustomerReviews from './components/CustomerReviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Spotlight from './components/Spotlight'
import WhatsAppAgent from './components/WhatsAppAgent'

const App = () => {
  return (
    <div className="app">
      <Spotlight />

      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <WhyUs />
      <Gallery />
      <CustomerReviews />
      <Contact />
      <Footer />
      <WhatsAppAgent />
    </div>
  )
}

export default App
