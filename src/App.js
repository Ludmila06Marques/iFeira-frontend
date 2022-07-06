import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App(){
    return(<>
    
    <userContext.Provider >
    <BrowserRouter>
    <Routes>
       
       { /*<Route  path="/" element={<Component/>}></Route>  */  }
        

    </Routes>    
    </BrowserRouter>
    </userContext.Provider>
    
    </>)
}