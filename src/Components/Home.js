import styled from "styled-components"
import {useEffect, useState} from 'react'
import  start from "../img/start.png"
import appContext from "../Contexts/AppContext.js"
import { useContext } from "react"
import {Link} from "react-router-dom"
import a from "../img/a.jpg"
import axios from "axios";



function SideBarr({barr , setBarr , login}){
    function hideProfile(){
        setBarr(true)
    }

    
    return(<>
    <Group margin={barr} >
    <Profile>
    
    <ion-icon onClick={hideProfile} name="person-circle-outline"></ion-icon>
    {login.userExist.name}
    </Profile>
    <Link to="/data" >
    <Rest><ion-icon name="clipboard-outline"></ion-icon> Meus dados</Rest>
    </Link>
    <Rest><ion-icon name="card-outline"></ion-icon> Pagamentos</Rest>
    <Rest><ion-icon name="albums-outline"></ion-icon> Cupons</Rest>
    <Link to="/help" >
    <RestFinal><ion-icon name="help-circle-outline"></ion-icon> Ajuda</RestFinal>
    </Link> 

        </Group>
    </>)
}

const RestFinal=styled.div`
position: fixed;
bottom: 0;
width: 230px;
height: 52px;
background-color: beige;
display: flex;

color: red;
align-items: center;

ion-icon{
    font-size: 10px;
}
`
const Rest=styled.div`
margin-top: 20px;
width: 230px;
height: 52px;
background-color: beige;
display: flex;

color: red;
align-items: center;

ion-icon{
    font-size: 10px;
}

`

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

    const [categories, setCategories]=useState([]);

    useEffect(() => {
        const promise = axios.get("http://localhost:5000/categories");

        promise.then((res) => {setCategories(res.data)});
        promise.catch(() => alert("Ocorreu um erro! Atualize a página!"));
    })

    return(<>
    <Weater>
        {categories.length === 0 ? "Carregando..." : categories.map((category, index) => 
        <OneCategory>
            <img src={category.image} key={index} />
            <h1>{category.name}</h1>
        </OneCategory>
        )}
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
function Start(){
    return(<>
    <Center><TitleStart> Faça sua feirinha !! </TitleStart><img src={start} /> </Center>
    </>)
}
const Center=styled.div`
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;

img{
  margin-top: 30px;
   width: 210px;
   height: 200px;
   opacity: 0.2;
}
`
const TitleStart=styled.h1`
font-size: 40px;
color: white;
margin-top: 50px;
font-family:"Abril Fatface";
text-align: center;
max-width: 150px;
`

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
border-radius: 5px;

display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;

    img{
        width: 120px;
        height: 180px;
        border-radius: 5px;
    }

    h1{
        font-size: 24px;
        color: #000000;
    }

`

const Weater = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

export default function Home(){
    const { login }= useContext(appContext);

    const [barr , setBarr]=useState(true);
    const [option , setOption]=useState("");
    function viewProfile() {
        setBarr(false);
    }

    
    return(
        <>
     <SideBarr barr={barr} setBarr={setBarr} login={login} />  
     <SearchBarr>
        <ion-icon onClick={viewProfile} name="list-outline"></ion-icon>
            <InputsSearch placeholder="Busque aqui"/>
            <Filter>Filtrar</Filter>
            </SearchBarr>
            <Choose option={option} setOption={setOption} />
            {option==""? <Start/>
            : option==="1"? 
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
font-weight: bold;

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
a{
    text-decoration: none;
}



ion-icon{
    font-size:35px;
    color: red; 
    
}
`
const Container=styled.div`
width: 100%;
height: 52px;
box-shadow: 0 0 1em white;
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