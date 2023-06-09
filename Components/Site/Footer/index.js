import { Grid ,Box, Typography, Stack,IconButton,OutlinedInput} from '@mui/material'

import {ArrowCircleRight,Facebook,Twitter,LinkedIn,Instagram} from '@mui/icons-material';

import Image from 'next/image'
import React from 'react'
import theme from '@/public/Utils/theme';
import { Data,data1 } from './Constant'


const index = () => {
  
  return (
    <Grid container marginBottom={10}  spacing={{xs:4,sm:6}} >


      <Grid item xs={12} sm={6} lg={4} order={{ xs: 1}}> 
       <Stack spacing={3}>
       <Box  sx={{width:100 ,height:35,position:'relative'}}> <Image  src="/Images/logo.png"   alt="Logo"  fill/>    </Box>
       <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
       
       <Stack direction={'row'} spacing={2}>
        <Facebook  sx={{color:'#1877F2'}}/> 
        <Twitter  sx={{color:'#1DA1F2'}}/>    
        <Instagram  sx={{color:'#EC3397'}}/> 
        <LinkedIn  sx={{color:'#0A66C2'}}/>
       </Stack>
      
       </Stack>
     
      </Grid>


      <Grid item xs={6} sm={4} lg={2} order={{ xs: 4,lg:2}}> 

       <Stack spacing={2}>
       <Typography variant='h6' sx={{fontWeight:800}}>Take a Tour </Typography>
       { Data.map((item, index) => (  <Typography key={index}> {item.Title}</Typography>   ))}
       </Stack>  
      
      </Grid>
      <Grid item xs={6} sm={4} lg={2} order={{ xs: 3,lg:3}}> 

     <Stack spacing={2}>
     <Typography variant='h6' sx={{fontWeight:800}}>Our Company </Typography>
      { data1.map((item, index) => ( <Typography key={index}> {item.Title}</Typography>  ))}
    </Stack>  
      
      </Grid>


      <Grid item xs={12} sm={6} lg={4} order={{ xs: 2,lg:4}}> 

<Stack spacing={2} sx={{width:{ xs:'80%',md:'70%'}}}>
     <Typography variant='h6' sx={{fontWeight:800}}>Subscribe </Typography>
     <Typography> Subscribe to get latest property, blog news from us</Typography>
     <OutlinedInput placeholder='Email Address'   endAdornment={
   <IconButton position="end" >
      <ArrowCircleRight  sx={{color:theme.primary}}/>
   </IconButton>
   } /> 
</Stack>
      </Grid>
    </Grid>
  )
}

export default index
