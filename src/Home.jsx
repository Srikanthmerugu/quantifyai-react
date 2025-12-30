import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Services from './components/Services'
import GlobalCoverage from './components/GlobalCoverage'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import WorldBranchesMap from './components/WorldBranchesMap'

const Home = () => {
  return (
    <div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Mission />
        <Services />
        {/* <WorldBranchesMap /> */}
        <GlobalCoverage />
        <Testimonials />
        <Team />
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Home