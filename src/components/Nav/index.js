import React,{useState,useEffect} from 'react'
import{Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,
NavBtn,NavBtnLink} from './Nav'
import {FaBars} from 'react-icons/fa'
import{links} from '../../data/data'
import{IconContext}from 'react-icons/lib'
import{animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {
  const[scrollNav,setScrollNav]=useState(false)
  const change=()=>{
    if(window.scrollY>80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',change)
  },[])
  const toggleHome=()=>{
    scroll.scrollToTop()
  }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
       <Nav scrollNav={scrollNav}>
         <NavbarContainer  >
             <NavLogo  to='/' onClick={toggleHome}>
              SAE
             </NavLogo>
             <MobileIcon onClick={toggle}>
               <FaBars/>
             </MobileIcon>
             <NavMenu>
                
                     {links.map((item)=>{
                        
                         const{id,url,text}=item
                       return  <NavItem key={id}>
                        <NavLinks 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        
                        to={url}>
                        {text}
                     </NavLinks>
                     </NavItem>
                     })}
                    
                 
             </NavMenu>
             <NavBtn>
                 <NavBtnLink to=''>ورود</NavBtnLink>
             </NavBtn>
         </NavbarContainer>
       </Nav>
       </IconContext.Provider>
       </>
    )
}

export default Navbar
