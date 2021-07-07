import React from 'react'
import { Button } from '../ButtonElements'
import{InfoContainer,InfoWrapper,InfoRow,Column1,Column2,
TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img

} from './info'
function InfoSection({lightBg,id,imgStart,topLine,lightText,headLine,
darkText,buttonLabel,img,alt,description}) {
    return (
        <>
         <InfoContainer lightBg={lightBg} id={id} >
             <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                     <TextWrapper>
                         <TopLine>{topLine}</TopLine>
                         <Heading lightText={lightText}>{headLine}</Heading>
                         <Subtitle darkText={darkText}>{description}</Subtitle>
                         <BtnWrap>
                             <Button to='home'>
                                 {buttonLabel}
                             </Button>   
                         </BtnWrap>
                     </TextWrapper>
                     </Column1>
                     <Column2>
                     <ImgWrap>
                     <Img src={img} alt={alt}/>
                     </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
             
             </InfoContainer>   
        </>
    )
}

export default InfoSection
