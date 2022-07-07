import styled from "styled-components"
import { Link } from "react-router-dom"
import appContext from "../Contexts/AppContext.js"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import image from "../img/bag.png"
import axios from "axios"


export default function RegisterScreen(){

    const {email , setEmail , password , setPassword , name  , setName  , view , setView , home , setHome}=useContext(appContext)

    const navigate= useNavigate()
    function viewPassword(){
        setView("text")
    }
    function hidePassword(){
        setView("password")
    }
    function   register(){
        console.log("registrando")
        const body={email , name , password , home}
                
         const promise=   axios.post('https://ifeiraapp.herokuapp.com/sign-up' , body)
      
        promise
        .then(res=>{ 

              navigate("/")
           
        })
      
        .catch(err=>{   
            console.log(err)       
         
           
        })

       
    }


    return(<>
    <Container>
    <Title>  <img src={image} width= "100px" height="100px" /> iFeira</Title>
    <InputName placeholder="Name" onChange={(e)=> setName(e.target.value)} value={name}></InputName>
    <InputEmail placeholder="E-mail" onChange={(e)=> setEmail(e.target.value)} value={email}></InputEmail>
    <Group>  
    {view==="password"?
         <IconEye onClick={viewPassword}><ion-icon name="eye-outline"></ion-icon></IconEye>
        :
        <IconEye  onClick={hidePassword}><ion-icon name="eye-off-outline"></ion-icon></IconEye>
        }
    <InputPassword type={view}  placeholder="Senha"onChange={(e)=> setPassword(e.target.value)} value={password}></InputPassword>
    </Group>
    <InputHome placeholder="Endereco "onChange={(e)=> setHome(e.target.value)} value={home} ></InputHome>
     <SingUpButton onClick={register} >Cadastrar</SingUpButton>
    
     <Link to="/" >
     <Back>Já tem uma conta? Entre agora!</Back>
     </Link>
    
      

    </Container>
    </>)
}

const InputHome=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
`

const Group=styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;

`

const IconEye=styled.div`
position: absolute;
font-size: 25px;
right: 10px;
color: gray;

`
const Back=styled.h3`
color: 
#FFFFFF;
font-size: 15px;
margin-top: 36px;
font-family: 'Raleway';
font-weight: bold;
`

const Container=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
a{
    text-decoration: none;
}
`
const Title = styled.h1`
color: #FFFFFF;
font-size: 50px;
margin-top: 59px;
margin-bottom: 24px;
font-family: 'Pacifico';

`
const InputName=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
`

const InputEmail=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
padding: 5px;
`
const InputPassword=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
font-size: 20px;
margin-bottom: 13px;
padding: 5px;
`


const SingUpButton= styled.button`
background-color: 
#FFFFFF;
color:red ;
font-size: 20px;
width: 
326px;
height: 52px;
border-radius: 5px;
border: 1px solid red;
margin-top: 13px;
font-family: 'Raleway';
font-weight: bold;

`