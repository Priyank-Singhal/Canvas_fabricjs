import React from 'react'
import Rectangle from '../components/Rectangle'
import Triangle from '../components/Triangle'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Circle from '../components/Circle'
import '../index.css'

const Home = () => {
  return (
    <div>
      <Nav />
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Rectangle />
        <Circle />
        <Triangle />
      </div>
      <div style={{marginLeft: '5%'}}>
        <p>These are 3 individual canvas and the coordinates of the three objects are with respect to their own canvas.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Home