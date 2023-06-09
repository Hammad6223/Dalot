import { Box, Typography,Stack, Grid, ListItemText, ListItemIcon, ListItem } from '@mui/material'
import theme from '@/public/Utils/theme';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import React from 'react'
import Image from 'next/image'
const index = () => {
return (
<Box  >

   <Box sx={{ marginX:'auto',marginY:8}}>
   <Typography  sx={{fontWeight:800,textAlign:'center',fontSize:{xs:'1.7rem',sm:'3rem' } }}>Read our Blog Posts </Typography>
   <Typography variant='h4' sx={{fontWeight:800,textAlign:'center',fontSize:{xs:'1.7rem',sm:'3rem' }}}> and Latest News </Typography>
   </Box>

<Grid container spacing={3}   sx={{display:'flex',justifyContent:'center'}}>

   <Grid item xs={12} lg={8}>  
   <Box sx={{   backgroundImage: `url('/Images/blog.png')`,

   display:'flex',
   alignItems:'end',
   justifyContent:'end',
   backgroundRepeat:'no-repeat' ,
   backgroundSize:'cover',
  
   height:'530px',
   borderRadius:'24px'  }}>

   <Box sx={{backgroundColor:'rgba(255, 255, 255, 0.7)',width: '415px',height:{xs:'none',sm:'283px'},borderRadius:'24px' }}> 
   <Stack spacing={2} paddingX={3} sx={{paddingTop:2}}>
      <ListItemText primary = {
      <Typography variant='caption' >26 Feb 2023, 17:00</Typography>
      }
      secondary ={
      <Typography sx={{fontWeight:700}} > Renting vs Buying Property: How to Decide Which is Right for You? </Typography>
      }>
      </ListItemText>
      <Typography>Duis id malesuada orci. Donec vitae urna eget dolor malesuada rutrum. Nam a metus ipsum. Praesent id commodo odio. </Typography>
      <Typography sx={{color:theme.primary}}>Read More....</Typography>
      <Stack direction={'row'} spacing={{xs:1,sm:3}}>
         <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
         <PersonOutlineIcon fontSize='12px'  />
         <Typography  variant='caption' > John Abraham Doe </Typography>
      </Stack>
      <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
      <ChatBubbleOutlineIcon fontSize='12px'  />
      <Typography  variant='caption' > 13 Comments</Typography>
   </Stack>
   </Stack>
   </Stack>
   </Box>
   </Box>
   </Grid> 
   
   <Grid  xs={12} sm={6} lg={4} item>
    <Box  sx={{backgroundColor:'#F9F9F9' ,borderRadius:'24px',height:{ xs:'none',sm:'570px',md:'530px'},overflowY:'hidden'}}>
   <Box  sx={{height:240,position:'relative' }}>
      <Image  src="/Images/blog1.png"   alt="Logo"  fill/>
   </Box>
   <Stack spacing={2} sx={{paddingTop:2,paddingX:{xs:2,md:5}}} >
      <ListItemText primary = {
      <Typography variant='caption' sx={{color:'#9B9B9B'}}>26 Feb 2023, 17:00</Typography>
      }
      secondary ={
      <Typography  sx={{fontWeight:700}} > Renting vs Buying Property: How to Decide Which is Right for You? </Typography>
      }>
      </ListItemText>
      <Typography >Duis id malesuada orci. Donec vitae urna eget dolor malesuada rutrum. Nam a metus ipsum. Praesent id commodo odio. </Typography>
      <Typography sx={{color:theme.primary}}>Read More....</Typography>
      <Stack direction={'row'} spacing={{xs:1,sm:3}} sx={{color:'#9B9B9B',paddingBottom:2}}>
         <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
         <PersonOutlineIcon fontSize='12px'  />
         <Typography  variant='caption' sx={{color:'#9B9B9B'}}> John Abraham Doe </Typography>
      </Stack>
      <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
      <ChatBubbleOutlineIcon fontSize='1px'  />
      <Typography  variant='caption' sx={{color:'#9B9B9B'}}> 13 Comments</Typography>
   </Stack>
   </Stack>
   </Stack>

   </Box>
   </Grid>
   <Grid  xs={12} sm={6} lg={4} item>
    <Box  sx={{backgroundColor:'#F9F9F9' ,borderRadius:'24px',height:{ xs:'none',sm:'570px',md:'530px'},overflowY:'hidden'}}>
   <Box  sx={{height:240,position:'relative' }}>
      <Image  src="/Images/blog1.png"   alt="Logo"  fill/>
   </Box>
   <Stack spacing={2} sx={{paddingTop:2,paddingX:{xs:2,md:5}}} >
      <ListItemText primary = {
      <Typography variant='caption' sx={{color:'#9B9B9B'}}>26 Feb 2023, 17:00</Typography>
      }
      secondary ={
      <Typography  sx={{fontWeight:700}} > Renting vs Buying Property: How to Decide Which is Right for You? </Typography>
      }>
      </ListItemText>
      <Typography >Duis id malesuada orci. Donec vitae urna eget dolor malesuada rutrum. Nam a metus ipsum. Praesent id commodo odio. </Typography>
      <Typography sx={{color:theme.primary}}>Read More....</Typography>
      <Stack direction={'row'} spacing={{xs:1,sm:3}} sx={{color:'#9B9B9B',paddingBottom:2}}>
         <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
         <PersonOutlineIcon fontSize='12px'  />
         <Typography  variant='caption' sx={{color:'#9B9B9B'}}> John Abraham Doe </Typography>
      </Stack>
      <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
      <ChatBubbleOutlineIcon fontSize='1px'  />
      <Typography  variant='caption' sx={{color:'#9B9B9B'}}> 13 Comments</Typography>
   </Stack>
   </Stack>
   </Stack>

   </Box>
   </Grid>

   <Grid  xs={12} sm={6} lg={4} item>
    <Box  sx={{backgroundColor:'#F9F9F9' ,borderRadius:'24px',height:{ xs:'none',sm:'570px',md:'530px'},overflowY:'hidden'}}>
   <Box  sx={{height:240,position:'relative' }}>
      <Image  src="/Images/blog1.png"   alt="Logo"  fill/>
   </Box>
   <Stack spacing={2} sx={{paddingTop:2,paddingX:{xs:2,md:5}}} >
      <ListItemText primary = {
      <Typography variant='caption' sx={{color:'#9B9B9B'}}>26 Feb 2023, 17:00</Typography>
      }
      secondary ={
      <Typography  sx={{fontWeight:700}} > Renting vs Buying Property: How to Decide Which is Right for You? </Typography>
      }>
      </ListItemText>
      <Typography >Duis id malesuada orci. Donec vitae urna eget dolor malesuada rutrum. Nam a metus ipsum. Praesent id commodo odio. </Typography>
      <Typography sx={{color:theme.primary}}>Read More....</Typography>
      <Stack direction={'row'} spacing={{xs:1,sm:3}} sx={{color:'#9B9B9B',paddingBottom:2}}>
         <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
         <PersonOutlineIcon fontSize='12px'  />
         <Typography  variant='caption' sx={{color:'#9B9B9B'}}> John Abraham Doe </Typography>
      </Stack>
      <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
      <ChatBubbleOutlineIcon fontSize='1px'  />
      <Typography  variant='caption' sx={{color:'#9B9B9B'}}> 13 Comments</Typography>
   </Stack>
   </Stack>
   </Stack>

   </Box>
   </Grid>

   <Grid  xs={12} sm={6} lg={4} item>
    <Box  sx={{backgroundColor:'#F9F9F9' ,borderRadius:'24px',height:{ xs:'none',sm:'570px',md:'530px'},overflowY:'hidden'}}>
   <Box  sx={{height:240,position:'relative' }}>
      <Image  src="/Images/blog1.png"   alt="Logo"  fill/>
   </Box>
   <Stack spacing={2} sx={{paddingTop:2,paddingX:{xs:2,md:5}}} >
      <ListItemText primary = {
      <Typography variant='caption' sx={{color:'#9B9B9B'}}>26 Feb 2023, 17:00</Typography>
      }
      secondary ={
      <Typography  sx={{fontWeight:700}} > Renting vs Buying Property: How to Decide Which is Right for You? </Typography>
      }>
      </ListItemText>
      <Typography >Duis id malesuada orci. Donec vitae urna eget dolor malesuada rutrum. Nam a metus ipsum. Praesent id commodo odio. </Typography>
      <Typography sx={{color:theme.primary}}>Read More....</Typography>
      <Stack direction={'row'} spacing={{xs:1,sm:3}} sx={{color:'#9B9B9B',paddingBottom:2}}>
         <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
         <PersonOutlineIcon fontSize='12px'  />
         <Typography  variant='caption' sx={{color:'#9B9B9B'}}> John Abraham Doe </Typography>
      </Stack>
      <Stack sx={{display:'flex' ,alignItems:'center'}} spacing={0.5} direction={'row'} >
      <ChatBubbleOutlineIcon fontSize='1px'  />
      <Typography  variant='caption' sx={{color:'#9B9B9B'}}> 13 Comments</Typography>
   </Stack>
   </Stack>
   </Stack>

   </Box>
   </Grid>
 
</Grid>
</Box>
)
}
export default index