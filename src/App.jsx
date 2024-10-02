import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CardSection from './components/CardSection'
import { CardDefault } from './components/ProductCard'
import FooterBanner from './components/FooterBanner'
import FooterSocial from './components/FooterSocial'
import AdFooter from './components/AdFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
     <Navbar/>
     <CardSection/>
     <FooterBanner/>
     <FooterSocial/>
     <AdFooter/>
    </div>
  )
}

export default App
