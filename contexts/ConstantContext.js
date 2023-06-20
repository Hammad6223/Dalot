import { useState,createContext,useContext } from 'react'
const HandleContext = createContext();



const ConstantContext = ({children}) => {

  const [bgcolor ,setbgcolor] =useState(false);
  
 
  
  
  

  return (
   
<HandleContext.Provider  value={  {bgcolor ,setbgcolor}  }>
{children}
</HandleContext.Provider>

   )
   
}

const GlobalConstantContext = ()=>{
return useContext(HandleContext);
}

export  {ConstantContext ,GlobalConstantContext };
