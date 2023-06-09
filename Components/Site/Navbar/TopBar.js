import React from 'react'
import {IconButton,Typography,Box,Button, Stack,AppBar,Toolbar,} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { GlobalHandleContext } from '@/contexts/NavBarContext';
import { navItems } from './Constant';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
const TopBar = () => {

  const Handler = GlobalHandleContext();
  const router = useRouter();
  
  return (
    <>

<AppBar component="nav" sx={{ background: 'transparent', boxShadow: 'none' ,marginTop:3, paddingX: {xl:10,lg:8,sm:5,xs:2} ,position:'static'}} >
  <Toolbar>

     <Box  sx={{width:100 ,height:35,position:'relative'}}>
      <Image  src="/Images/logo.png"   alt="Logo"  fill/>  
     </Box>

     <IconButton   aria-label="open drawer"  edge='end'   onClick={Handler.handleDrawerToggle}  
      sx={{ ml: 'auto', display: { md: 'none' }  }} >    <MenuIcon  />
     </IconButton>

     <Box sx={{ display: { xs: 'none', md: 'block' } ,marginLeft:'auto' }}>

     <Stack direction={'row'}  spacing={{ md: 2, lg: 3 }}>

            {navItems.map((item,index) => (
            <Link href={item.link} style={{textDecoration:'none'}} key={index} > <Typography   sx={{paddingTop:'8px',fontWeight:700}} >   {item.Text}   </Typography> </Link> 
            ))}

     <Button variant='outlined'  size="medium"  sx={{ padding:'5px 30px 5px 30px', border : '2px solid #2E3192', borderRadius:'14px'}}  onClick={() => router.push('/user/mylisting')} > LOG &nbsp; IN</Button>
          
            
     </Stack>

     </Box>

  </Toolbar>
</AppBar>

      
    </>
  )
}

export default TopBar
