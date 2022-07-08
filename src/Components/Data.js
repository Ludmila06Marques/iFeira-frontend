import appContext from "../Contexts/AppContext.js"
import { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Data(){
    const { login }= useContext(appContext)

    return(<>
    <Link to="/home" >
    <Icon><ion-icon name="arrow-back-outline"></ion-icon></Icon>
    </Link>
    <Container>
    
    <InputName placeholder={login.userExist.name} disabled></InputName>
    <InputEmail placeholder={login.userExist.email} disabled></InputEmail>
    <InputHome placeholder={login.userExist.home}disabled ></InputHome>
    
    
        

    </Container></>)
}
const Icon=styled.div`
color: white;
font-size: 30px;
padding: 20px;
`
const InputHome=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
::placeholder{
    color: white;
}

`


const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 200px;
a{
    text-decoration: none;
}
`

const InputName=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
::placeholder{
    color: white;
}
`

const InputEmail=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
::placeholder{
    color: white;
}
`
