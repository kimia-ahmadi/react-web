import React from "react";
import { Button } from "../ButtonElements";
import { Link } from "react-scroll";
import { 
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  BtnWrap,
  Heading,
  Img,
  ImgWrap
 } from "./InfoElements";

 
const InfoElements = ({lightBg,imgStart,lightText,
  darkText,topLine,headLine,buttonLabel,primary,dark,dark2,
  description,img,id,alt,linkBtn}) => {
  return (
   <>  
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                      <Link to = "/about">
                        <Button to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact={true}
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0 }
                        >{buttonLabel}</Button>
                      </Link>
                    </BtnWrap>
                  </TextWrapper>
                </Column1>
                <Column2>
                   <ImgWrap>
                       <Img src={img} alt={alt}  />
                   </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
   </>
  );
};

export default InfoElements;