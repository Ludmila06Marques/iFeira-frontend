import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginScreen from "./Components/LoginScreen"
import appContext from "./Contexts/AppContext.js"
import { useState } from "react"
import RegisterScreen from "./Components/ResgisterScreen"
import Home from "./Components/Home"
export default function App(){
    
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [name , setName]=useState("")
    const [token , setToken]=useState()
    const [login , setLogin]=useState()
    const [view , setView]=useState("password")
    const [home  , setHome]=useState("")




    return(<>
    
    <appContext.Provider value={{email , setEmail , password , setPassword , name , setName , token , setToken , view , setView , home , setHome , setLogin , login}} >
    <BrowserRouter>
    <Routes>
       
       <Route  path="/" element={<LoginScreen/>}></Route> 
       <Route  path="/register" element={<RegisterScreen/>}></Route> 
       <Route  path="/home" element={<Home/>}></Route> 
        

    </Routes>    
    </BrowserRouter>
    </appContext.Provider>
    
    </>)
}