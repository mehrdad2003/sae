import React from 'react'
import{SidebarContainer,Icon,CloseIcon,SideBtnWrap,SidebarWrapper,
SidebarMenu,SidebarLink,SidebarRoute}from './side'
import {links} from '../../data/data'
function Sidebar({isOpen,toggle}) {
    return (
       <>
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                 {links.map((item)=>{
                     const{url,text,id}=item;
                     return<SidebarLink onClick={toggle} key={id} to={url} >
                      {text}
                     </SidebarLink>
                    
                 })}
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/signin'>
                       ورود
                   </SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
       </SidebarContainer>
       </>
    )
}

export default Sidebar
