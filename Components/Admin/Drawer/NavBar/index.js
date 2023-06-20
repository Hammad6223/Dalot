import React from 'react'
import {AppBar,Toolbar,IconButton,OutlinedInput,InputAdornment,Grid,Avatar,Stack} from '@mui/material';
import {Search,ChatOutlined,NotificationsNoneOutlined,Menu}  from '@mui/icons-material';
import Data from './Data';

const NavBar = ({handleDrawerToggle}) => {

 

const drawerWidth = 240;
  return (
    <>
      
      <AppBar
        position="fixed" 
        sx={{ backgroundColor:"#fff", width: { md: `calc(100% - ${drawerWidth}px)` },  ml: { md: `${drawerWidth}px` }, height:'70px'}} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <Menu sx={{color:'black'}}/>
          </IconButton>
          <Grid container sx={{alignItems:'center'}}>

            <Grid item md={5} sx={{display:{xs:'none',md:'block'}}}>
            <OutlinedInput placeholder='Search' size='small' fullWidth sx={{borderRadius:'8px',border:'1px solid #EFF0F0'}}
            endAdornment={  <InputAdornment position="end">  <Search  /> </InputAdornment> } />
            </Grid>

            <Grid item  md={7} xs={12}> 
 
             <Stack direction={'row'} spacing={{xs:0,sm:1}} sx={{alignItems:'center',justifyContent:'end'}}>

             <Avatar sizes='small' sx={{backgroundColor:'transparent',border:'1px solid #EFF0F0',display:{xs:'none',md:'flex'},marginLeft:'auto'}}> <ChatOutlined  sx={{color:'#0E0F2C'}}/></Avatar>
             <Avatar sizes='small' sx={{backgroundColor:'transparent',border:'1px solid #EFF0F0',display:{xs:'none',md:'flex'}}}> <NotificationsNoneOutlined  sx={{color:'#0E0F2C'}}/></Avatar>
              <Avatar sizes='small' sx={{backgroundColor:'transparent',border:'1px solid #EFF0F0',display:{xs:'flex',md:'none'}}}> <Search   sx={{color:'#0E0F2C'}}/></Avatar>
           
            <Data />
            </Stack>
            

            </Grid>
            </Grid>

        
        </Toolbar>
      </AppBar>

     
    </>
  )
}

export default NavBar
