import styled from "styled-components"
import {useState} from 'react'
import { createPortal } from "react-dom"


function SideBarr({barr , setBarr}){
    function hideProfile(){
        setBarr(true)
    }

  
    return(<>
    <Group margin={barr} >
    <Profile>
    
    <ion-icon onClick={hideProfile} name="person-circle-outline"></ion-icon>
    Ludmila Marques
    </Profile>
      

        </Group>
    </>)
}


function Choose({option ,setOption}){

    function first(){
        setOption("1")
    }
    function second(){
        setOption("2")
    }
    function third(){
        setOption("3")
    }
    return(<>
    <Container>
        <One onClick={first} >CATEGORIAS</One>
        <One onClick={second}>NOVIDADES</One>
        <One onClick={third}><ion-icon name="cart-outline"></ion-icon></One>
       


    </Container>
    </>)
}

function Category(){
    return(<>
    <Weater>
        <OneCategory></OneCategory>
        <OneCategory></OneCategory>
        <OneCategory></OneCategory>
        <OneCategory></OneCategory>
        <OneCategory></OneCategory>
        <OneCategory></OneCategory>
    </Weater>
    
    </>)
}
function News(){
    return(<>
    <Banner>
        <Publi></Publi>
       

    </Banner>
    <Small>
            <OneSmall></OneSmall>
            <OneSmall></OneSmall>
            <OneSmall></OneSmall>
            <OneSmall></OneSmall>

        </Small>
    </>)
}

function Buy(){
    return(<></>)
}

const OneSmall=styled.div`
width: 145px;
height: 145px;
background-color: white;
margin-left: 5px;
margin-right: 5px;
margin-top: 5px;
`

const Small=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-top: 10px;


`
const Banner = styled.div`
display: flex;
justify-content: center;
align-items: center;


`
const Publi=styled.div`
width: 300px;
height: 200px;
background-color: white;
margin-top: 10px;

`

const OneCategory=styled.div`
width: 150px;
height: 250px;
background-color: white;
margin: 8px 8px;
box-shadow: 0 0 1em red;


`
const Weater = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

export default function Home(){

    const [barr , setBarr]=useState(true)
    const [option , setOption]=useState("1")
    function viewProfile(){
        setBarr(false)
    }

    
    return(
        <>
     <SideBarr barr={barr} setBarr={setBarr}  />  
     <SearchBarr>
        <ion-icon onClick={viewProfile} name="list-outline"></ion-icon>
            <InputsSearch placeholder="Busque aqui"/>
            <Filter>Filtrar</Filter>
            </SearchBarr>
            <Choose option={option} setOption={setOption} />
            {option==="1"? 
             <Category/> : option==="2" ? <News/>: <Buy/>  }
           
          
            </>
    )
}

const Profile=styled.div`
color: red;
font-size: 20px;
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 10px;

`

const Group=styled.div`
width: 230px;
height: 100%;
background-color: white;
position: fixed;
top: 0;
left: 0;
z-index: 1;
margin-left: ${props => props.margin ? "-230px": "0"};



ion-icon{
    font-size:35px;
    color: red; 
    
}
`
const Container=styled.div`
width: 100%;
height: 52px;
box-shadow: 0 0 1em white;
overflow-x: scroll;
display: flex;
justify-content: space-around;
align-items: center;

`
const One=styled.h1`
color: white;
font-size: 18px;
display: flex;
margin-left: 10px;
margin-right: 10px;
font-weight: bold;
opacity:0.5;

:hover{
    opacity: 1;
    cursor: pointer;
}
ion-icon{
    font-size: 30px;
}
`



const Filter=styled.h2`
color: red;
font-size: 18px;
`
const SearchBarr=styled.div`
width: 100%;
height: 70px;
background-color: white;
box-shadow: 0 0 1em black;
display:  flex;
justify-content: space-around;
align-items: center;
z-index: 0;

ion-icon{
    color: red;
    font-size: 30px;
}

`
const InputsSearch=styled.input`
height: 40px;
width: 70%;
border: 1px solid red;
border-radius: 5px;
color: red;
padding: 10px;

::placeholder{
    color: red;
}
`