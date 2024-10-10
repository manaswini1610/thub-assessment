import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Companies from './Components/Companies/Companies'
import Aboutus from './Components/Aboutus/Aboutus'
import Services from './Components/Services/Services'
import Chooseus from './Components/Chooseus/Chooseus'
import Features from './Components/Features/Features'
import Opportunity from './Components/Opportunity/Opportunity'
import Latestnews from './Components/Latestnews/Latestnews'
import Feedback from './Components/Feedback/Feedback'
import Journey from './Components/Journey/Journey'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Home/>
    <Companies/>
    <Aboutus/>
    <Services/>
    <Chooseus/>
    <Features/>
    <Opportunity/>
    <Latestnews/>
    <Feedback/>
    <div className='backhgroundColor'>
    <Journey/>
    <Footer/>
    </div>

    </>
  
      
  
  )
}

export default App
