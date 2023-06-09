import React from 'react'
import { Box,CardHeader,Typography,Stack,IconButton,Chip ,Grid, Button,ListItemText} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Data,Data1,Data2,Data3 } from './Constant';
import Image from 'next/image';
import theme from '@/public/Utils/theme';
const LeftSide = () => {
return (
<>
<Grid item xs={8}>

   <Box  sx={{height:'480px' ,position:'relative'}}>
   <Image  src="/Images/list1.png"   alt="Logo"  fill/>
   </Box>

   <Grid container marginY={5}>

      <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between',marginBottom:2}}>
         <Typography  fontWeight={700}> Letting Details  </Typography>
         <Typography variant='h5' fontWeight={800}> £1,500 pcm </Typography>
      </Grid>

      {/* Letting Deatail */}

      { Data.map((item, index) => (  <Grid item xs={4}>
         <ListItemText primary={item.category} secondary={ <Typography sx={{fontWeight:700}}> {item.Text}</Typography> }  key={index}/> 
      </Grid> ))}

      <Grid item xs={12}>  <hr sx={{color:theme.light}} />  </Grid>

      { Data1.map((item, index) => (  <Grid item xs={3} sx={{marginY:3}}>
         <Stack  key={index} spacing={2}>
         <Typography sx={{fontWeight:700}}> {item.category}</Typography>
         <Stack direction={'row'} spacing={1}  sx={{display:'flex' ,alignItems:'center'}} > 
            {item.icon} 
            <Typography > {item.Text}</Typography>
          </Stack>
         </Stack>
      </Grid> ))}


      <Grid item xs={12}>  <hr sx={{color:theme.light}} /> </Grid>


      { Data2.map((item, index) => ( 
      <Grid item xs={4} sx={{marginTop:3}}>
         <Stack  key={index} spacing={2}>
            <Typography sx={{fontWeight:700}}> {item.category}</Typography>
            <Typography > {item.Text}</Typography>
         </Stack>
      </Grid>))}

      <Grid item xs={12}> <hr sx={{color:theme.light}} /> </Grid>

      <Grid item xs={12} sx={{marginTop:3}}>
      <Typography sx={{fontWeight:700}}> Features  </Typography>
      <Box  sx={{padding:3}} >
      { Data3.map((item, index) => ( 
      <Chip label={item.Text} key={index}  sx={{margin:'0.5rem'}}/>
      ))} </Box>  </Grid>

    <Grid item xs={12}> <hr sx={{color:theme.light}} /> </Grid>

    <Grid item xs={12} sx={{marginTop:3}}>
      <Typography sx={{fontWeight:700}}> Property Description </Typography>
      <Typography>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy 
        is available. It is also used to text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </Typography>
    </Grid>

   </Grid>
</Grid>
</>
)
}
export default LeftSide