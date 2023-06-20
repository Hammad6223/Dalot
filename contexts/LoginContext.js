import { useState,createContext,useContext } from 'react'
const HandleContext = createContext();



const LoginContext = ({children}) => {

  const [check ,setcheck] =useState(1);
  
 
  
  
  

  return (
   
<HandleContext.Provider  value={  {check ,setcheck}  }>
{children}
</HandleContext.Provider>

   )
   
}

const GlobalLoginContext = ()=>{
return useContext(HandleContext);
}

export  {LoginContext ,GlobalLoginContext };
