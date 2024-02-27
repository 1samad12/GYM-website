import React from 'react'
import Navbar  from './components/Navbar'
import Header from './components/Header'
import Featres from './components/Featres'
import Offer from './components/Offer'
import About from './components/About'
import Contact from './components/Contact'
function App() {
  return (
    <div className='App' >
      <Navbar />
      <Header/>
      <Featres/>
     <Offer/>
     <About/>
     <Contact/>
     
    </div>
  )
}

export default App