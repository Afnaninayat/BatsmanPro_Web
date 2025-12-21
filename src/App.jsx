import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Screenshots from './components/Screenshots'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import DemoVideo from './components/DemoVideo'
import TechStack from './components/TechStack'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Screenshots />
            <HowItWorks />
            <Features />
            <DemoVideo />
            <TechStack />
            <Download />
            <Footer />
        </div>
    )
}

export default App
