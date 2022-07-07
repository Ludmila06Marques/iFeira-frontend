import styled from "styled-components"
import appContext from "../Contexts/AppContext.js"
import { useContext } from "react"
import { Link , useNavigate } from "react-router-dom"
import image from "../img/bag.png"
import axios from "axios"



export default function LoginScreen(){
    const navigate= useNavigate()

    function signIn(){
        const body={ email , password }

        const promise= axios.post('https://ifeiraapp.herokuapp.com/sign-in' , body)
      
        promise
        .then(res=>{           
           setLogin(res.data)
           setToken(res.data.token)                
            navigate("/home")   
              

           
        })    
        .catch(err=>{   
          console.log(err)
            
            
    
           
        })


    }

function viewPassword(){
    setView("text")
}
function hidePassword(){
    setView("password")
}

         const {email , setEmail , password , setPassword    , setToken , setLogin  , setView , view}= useContext(appContext)
    return(<>
    
    <Container>
   
        <Title> <img src={image} width= "100px" height="100px" /> iFeira</Title>
        <InputEmail placeholder="E-mail"onChange={(e)=> setEmail(e.target.value)} value={email} ></InputEmail>
       <Group>
        {view==="password"?
         <IconEye onClick={viewPassword}><ion-icon name="eye-outline"></ion-icon></IconEye>
        :
        <IconEye  onClick={hidePassword}><ion-icon name="eye-off-outline"></ion-icon></IconEye>
        }
       
        <InputPassword placeholder="Senha "type={view} onChange={(e)=> setPassword(e.target.value)} value={password}></InputPassword>
        </Group>
      
       
        <SingInButton onClick={signIn} >Entrar</SingInButton>
        
        <Link to="/register">
        <SingUpButton>Primeira vez? Cadastre-se!</SingUpButton>
        </Link>

    </Container>
    </>)
}


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
const Container=styled.div`
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
margin-top: 159px;
margin-bottom: 24px;
font-family: 'Pacifico';
`
const InputEmail=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
margin-bottom: 13px;
font-size: 20px;
color: 
#000000;
padding: 5px;
`
const InputPassword=styled.input`
width: 326px;
height: 58px;
border-radius: 5px;
border: 1px solid #FFFFFF;
font-size: 20px;
color: 
#000000;
padding: 5px;


`

const SingInButton= styled.button`
background-color: #FFFFFF
;
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
const SingUpButton=styled.h3`
color: 
#FFFFFF;
font-size: 15px;
margin-top: 36px;
font-family: 'Raleway';
font-weight: bold;



`