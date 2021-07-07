import React,{useState} from 'react'
import{HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,
HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './Hero'
import Video from '../../images/01.jpg'
import {Button} from '../ButtonElements'
function Hero() {
    const[hover,setHover]=useState(false)
    const onMouse=()=>{
        setHover(!hover)
    }
    return (
        <>
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg  src={Video}
               />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                   به روز کردن کسب وکار شما کار ماست 
                </HeroH1>
                <HeroP>
                   هر چه سریع تر برای ثبت نام اقدام کن
                </HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onMouse}
                    onMouseLeave={onMouse}
                    to='signup'>
                     شروع کن{hover?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            </HeroContainer>    
        </>
    )
}

export default Hero
