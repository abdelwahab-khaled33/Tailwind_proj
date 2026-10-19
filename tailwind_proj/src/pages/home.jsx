import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Footer from '../components/footer'

function Home() {
  return (
    <>
        <Navbar/>
        <main>
            <Hero/>
        </main>
        <Footer/>
    </>
  )
}

export default Home