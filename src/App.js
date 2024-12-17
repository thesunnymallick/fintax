import React from 'react'
import Navbar from './layouts/Navbar'
import HeroSection from './components/HeroSection'
import CaseStudies from './components/CaseStudies'
import MilestonesSection from './components/MilestonesSection'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CaseStudies/>
      <MilestonesSection/>
      <Footer/>
    </div>
  )
}

export default App