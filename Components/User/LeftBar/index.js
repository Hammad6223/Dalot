import { Box, Card,Grid, Stack ,Avatar, Typography,Rating, Button,ListItem,ListItemIcon ,ListItemButton,ListItemText,Divider } from '@mui/material'
import { Data } from './Constant';
import theme from '@/public/Utils/theme';
import React from 'react'
import {AutoAwesome,CheckCircle} from '@mui/icons-material';
import Link from 'next/link';

const list = {
  '&:hover': { backgroundColor:theme.primary,
  '&, & .MuiListItemIcon-root , .MuiTypography-root ': {
    color: 'white'},
  } 
  ,paddingY:'0px'
}

const index = () => {
return (


   <Card sx={{border: '0.8px solid #C4C4C4',borderRadius: '20px'}} >
   <Stack sx={{paddingTop:2}} spacing={2}>
      
      <Stack sx={{display:'flex',alignItems:'center'}} spacing={0.7}>
         <Avatar alt="Remy Sharp" src="/Images/user1.png" sx={{ width: 100, height: 105 }} />
         <Typography variant='h6' fontWeight={800}> Hammad </Typography>

         <Stack direction={'row'} spacing={1}>
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5}  />
            <Typography sx={{color: '#FEC93D'}} fontWeight={800}> 5.0</Typography>
            <Typography> (20 Reviews)</Typography>
         </Stack>

         <Typography> <span style={{fontWeight:800}}>  Registered </span> for 2 years+</Typography>

         <Stack direction={'row'} spacing={1}>
            <Button variant='outlined' endIcon={ <AutoAwesome  sx={{color:'#FEC93D' }}/> } size='small' > Upgrade</Button> 
            <Button  variant='outlined' endIcon={ <CheckCircle  sx={{color:'#27AE60;' }}/> } size='small'>  Get Verified</Button> 
         </Stack>
      </Stack>


      <Stack >
         { Data.map((item, index) => ( 
         <Link key={index}  href={item.link} style={{textDecoration:'none'}}>
          
            <Divider />
            <ListItem  sx={list}>
               <ListItemButton  >
                  <ListItemIcon>
                     {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.Text}   />
               </ListItemButton>
            </ListItem>
            <Divider />
         </Link>
         ))}
      </Stack>




   </Stack>
   </Card>

)
}
export default index