import React from 'react'
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import {Box,Stack} from '@mui/material';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { GlobalHandleContext } from '@/contexts/NavBarContext';

import { navItems } from './Constant';
import Link from 'next/link';

const SideBar = () => {

  const Handler = GlobalHandleContext();

  const drawer =   (
    <Box  sx={{textAlign:'center',backgroundColor:'#DEDDED',height:'100vh',transition: '0.5s'}} >
    <Stack direction={'row'} > 
    <Box  sx={{width:100 ,height:35,position:'relative',margin:3}}>
      <Image  src="/Images/logo.png"   alt="Logo"  fill/>  
     </Box>
     <IconButton sx={{marginLeft:'auto'}}  onClick={Handler.handleDrawerToggle}  > <CloseIcon/></IconButton>
     </Stack>
      <Divider />
      <List  >
        {navItems.map((item,index) => (
            <Link href={item.link} style={{textDecoration:'none'}} key={index}>
          <ListItem  disablePadding  >
                
            <ListItemButton  sx={{textAlign:'center'}}>
      
              <ListItemText primary={item.Text}  />
            
            </ListItemButton>
          
          </ListItem>
          </Link>
        ))}
  
        
        
      </List>

      <Button variant='outlined'   > Login</Button>  
    </Box>
  );

  return (
    <>
      
      <Box component="nav">

        <Drawer  variant="temporary" open={Handler.mobileOpen}  anchor='top'  onClose={Handler.handleDrawerToggle}
          ModalProps={{ keepMounted: true, }}   // Better open performance on mobile.
          PaperProps={{sx: { width: "100%" },  height:'100%' }}
          sx={{ display: { xs: 'block', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box' } }} >
          { drawer }
        </Drawer>
        
      </Box>

    </>
  )
}

export default SideBar
