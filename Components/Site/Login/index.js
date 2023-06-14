import { Box, Grid, Typography,Stack,FormControlLabel ,Checkbox, Button} from '@mui/material'
import React from 'react'
import { Field } from '@/styles/Field';
import InfoIcon from '@mui/icons-material/Info';
import { Data } from './Constant';
import Image from 'next/image';
const index = () => {
  return (
    <Box>
      <Typography sx={{fontWeight:700,letterSpacing:3}} variant='h5'>CREATE A PROFILE</Typography>

      <Grid container spacing={4} marginTop={3}>

        <Grid item  xs={7}>
          <Grid container  spacing={2}> 
          
   {Data.map((item,index)=> (
          <Grid item xs={item.Size} key={index}>

        <Stack spacing={1.5}>

       <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
       <Typography fontWeight={700}> {item.Title} </Typography>
       <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> 
       </Stack>

       <Field    fullWidth   type={item.Type} size='small'/>

         </Stack>
         </Grid>
     
   )) }
         </Grid>
         <Box sx={{marginTop:5}}>
         <FormControlLabel control={<Checkbox defaultChecked  size='small'/>} label="I agree to the privacy policy and terms of service." />
         </Box>
         <Box sx={{display:'flex',justifyContent:'center'}}>
         <Button variant='contained' sx={{paddingX:10,marginTop:1}}> SIGN UP </Button>
         </Box>
        </Grid>

        <Grid item xs={5} > 

        <Box  sx={{width:'100%' ,height:'100%',position:'relative'}}>
        <Image  src="/Images/login.png"   alt="Logo"  fill/> 

        </Box>

          </Grid>

      </Grid>

    </Box>
  ) 
}

export default index
