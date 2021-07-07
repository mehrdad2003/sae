import React,{useState} from 'react'
import Navbar from '../components/Nav';
import Sidebar from '../components/Sidebar';
import Hero from '../components/HeroSection'
import Info from '../components/infoSection'
import Services from '../components/ServicesSection'
import{homeObj1,homeObj2,homeObj3} from '../components/infoSection/infoData'
import Footer from '../components/FooterSection'
function Home() {
    const[isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
         <Sidebar toggle={toggle} isOpen={isOpen}/> 
         <Navbar toggle={toggle}/> 
         <Hero/> 
         <Info {...homeObj1}/>
          <Info {...homeObj2}/>
          <Services/>
           <Info {...homeObj3}/>
           <Footer/>
        </>
    )
}

export default Home
