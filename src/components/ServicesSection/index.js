import React from 'react'
import{ServicesContainer,ServicesH1,ServicesH2,ServicesCard,
ServicesWrapper,ServicesP,ServicesIcon}from './Services'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg'
function Service() {
    return (
        <ServicesContainer id='services'>
          <ServicesH1>سرویس ها</ServicesH1>  
          <ServicesWrapper>
              <ServicesCard>
                  <ServicesIcon src={Icon1}/>
                  <ServicesH2>سرویس رایگان </ServicesH2> 
                  <ServicesP>تست</ServicesP> 
              </ServicesCard>
                            <ServicesCard>
                  <ServicesIcon src={Icon2}/>
                  <ServicesH2>دفتر مجازی</ServicesH2> 
                  <ServicesP>دفتر</ServicesP> 
              </ServicesCard>
                 <ServicesCard>
                  <ServicesIcon src={Icon3}/>
                  <ServicesH2>مستندات</ServicesH2> 
                  <ServicesP>تست</ServicesP> 
              </ServicesCard>
          </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Service
