import {React} from 'react'
import {styled ,IconButton,Box} from '@mui/material';
import Image from 'next/image';

import { ChevronLeft} from '@mui/icons-material';
import {GlobalHandleContext} from '@/contexts/DrawerContext'

export  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  
const Header = () => {
    const Handler = GlobalHandleContext();
   
  return (
    <>
      

      <DrawerHeader  onClick={Handler.handleDrawerToggle}  sx={{display:'flex' ,justifyContent:'space-between',alignItems:'center'}}>
      <Box  sx={{width:140 ,height:38,position:'relative' ,margin:2}}>
      <Image  src="/Images/logo.png"   alt="Logo"  fill/>  
     </Box>

         <IconButton  sx={{display:{sm:'block', md:'none'},marginTop:1}}>
        
            <ChevronLeft  />
      
         </IconButton>

      </DrawerHeader>
  
    </>
  )
}

export default Header
