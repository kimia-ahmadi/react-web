import styled from "styled-components";

export const InfoContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? 'white' : 'black')};
  @media screen and ( min-width: 769px){
    padding: 200px 0;
  }
  @media screen and ( max-width: 768px){
    padding: 350px 0;
  }
  @media screen and ( max-width: 516px){
    padding: 300px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  height: 500px;
  z-index: 1;
  @media screen and ( max-width:768px ){
    margin-top: -290px;
    max-width: 3000px;
  }
  @media screen and ( min-width: 769px){
    max-width: 1400px;
    margin-top: -150px;
  }
  @media screen and ( max-width: 516px){
    max-width: 2600px;
    margin-top: -240px;
    padding: 0 30px;

  }

`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
  col1'`: `'col1 col2'`)};

  @media screen and (max-width:768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 4px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 30px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 1000px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p`
  color: #a42e37;
  font-size: 12px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;  
  max-width: 300px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#a42e37' : 'black')}; 
  @media screen and ( min-width: 320px){
    font-size: 16px;
  }
  @media screen and ( max-width: 480px){
    font-size: 20px;
  }
  @media screen and ( min-width:768px ){
    font-size: 23px;
  }
  @media screen and ( max-width:1200px ){
    font-size: 30px;
  }
  @media screen and ( min-width:1200px ){
    font-size: 35px;
  }
  

`;

export const Subtitle = styled.p`
  margin-bottom: 20px;
  max-width: 700px;
  line-height: 35px;
  color: ${({ darkText }) => (darkText ? 'black' : 'white')};
  font-size: 20px;
`;

export const BtnWrap = styled.div` 
  display: flex;
  justify-content: flex-start;
  
`;

export const ImgWrap = styled.div`
  height: 100%;
  @media screen and ( max-width: 768px){
    max-width: 350px;
  }
  @media screen and ( min-width: 769px){
    max-width: 500px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 100px 0;
  padding-right: 0;
`;