import help from "../img/help.png"
import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Help(){

    return(<>
    <Link to="/home" >
    <Icon><ion-icon name="arrow-back-outline"></ion-icon></Icon>
    </Link>
    <Container>
        <Text>Caso haja problemas com o App entre em contato conosco : 
           
             </Text>
             <TextName> Gustavo :+55 67 984547953</TextName>
           <TextName> Ludmila :+34  607190787</TextName>
        <Image>  <img src={help} /></Image>
      
      
    </Container>
    </>)
}
const TextName=styled.h1`
color: white;
font-size: 25px;
text-align: center;
max-width: 400px;
margin-top: 10px;
font-family:"Abril Fatface";
`
const Image=styled.div`
opacity: 0.1;
    width: 200px;  
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
 
   
`
const Text=styled.h1`
color: white;
font-size: 30px;
text-align: center;
max-width: 300px;
font-family:"Abril Fatface";

`
const Icon=styled.div`
color: white;
font-size: 30px;
padding: 20px;
`
const Container=styled.div`display: flex;
margin-top: 150px;
flex-direction: column;
justify-content: center;
align-items: center;
display: flex;
justify-content: center;
align-items: center;
background-image: url({help});



`
