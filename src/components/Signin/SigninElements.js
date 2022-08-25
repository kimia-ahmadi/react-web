import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div`
  min-height: 600px;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(164,46,55,1) 50%, rgba(255,255,255,1) 100%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;

  @media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 7px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -80px;
  justify-content: center;

  @media screen and (max-width: 480px){
    padding: 10px;
  }
`;

export const Form = styled.form`
  background:  black;
  max-width: 300px;
  height: auto;
  width: 100%;
  z-index: 1;
  display; grid;
  margin: 0 auto;
  padding: 40px 10px;
  border-radius: 4px;
  box-shadow: 2px 4px 8px 1px rgba(0,0,0,0.75);
  -webkit-box-shadow: 2px 4px 8px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px 4px 8px 1px rgba(0,0,0,0.75);
  

  @media screen and (max-width: 400px){
    padding: 30px 30px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 100px;
  fon-size: 10px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 10px 50px;
  margin-bottom: 32px;
  border: none;
  display: block;
  border-radius: 4px;
  
  @media screen and (max-width: 400px){
    padding: 10px 27px;
  }
  @media screen and (max-width: 308px){
    padding: 10px 10px;
  }

`;

export const FormButton = styled.button`
  padding: 17px 10px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 15px;
  cursor: pointer;
  &:hover{
    background: green;
    color: white;
  }
`;

export const Text = styled.span`
  text-align: center;
  display: block;
  margin-top: 25px;
  color: #fff;
  font-size: 15px;
`