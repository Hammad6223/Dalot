import { Box, Grid, Stack, Typography,FormControlLabel,Checkbox,RadioGroup, useMediaQuery,useRadioGroup  ,Radio, Button   }from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
const [check,setcheck] = React.useState(true)
  const changeHandler = () => {
    setcheck(!check);
  };

  const isSmallScreen = useMediaQuery('(max-width: 600px)');


  return (
 <Box >

    <Typography fontWeight={800} variant='h5'> Create a New Listing</Typography>
    <Stack marginTop={5}>
     
      <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}> <Typography fontWeight={700}> Listing Type </Typography> 
       <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}} /> </Stack> 

    
       <RadioGroup name="use-radio-group" defaultValue="first" row>
  <FormControlLabel  value="first"  label="Buy"  control={<Radio  size='small'/>}/>
  <FormControlLabel   value="second"  label="Rent" control={<Radio  size='small'/>} />
  </RadioGroup>
      
      
    </Stack>

    <Stack marginTop={5}>
     
     <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}> <Typography fontWeight={700}> 
     Do you want your contact number to display in the listing? </Typography> 
      <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> </Stack> 

   
      <RadioGroup name="use-radio-group" defaultValue="first" row onChange={changeHandler}>
 <FormControlLabel  value="first"  label="Yes"  control={<Radio size='small' />}/>
 <FormControlLabel   value="second"  label="No" control={<Radio  size='small' />} />
 </RadioGroup>
 { check == true ?
     <Box marginTop={3}>
 <PhoneInput
  country={'pk'}
   inputProps={{ style: { width: isSmallScreen ? '250px' : '300px' , height: '50px', border: '1px solid #E6E6E6' } }}
  // inputStyle={{ width: isSmallScreen ? '150px' : '250px' }}
    
/></Box>
:null
} 
   </Stack>

   <Button variant='contained' sx={{marginTop:{xs:8,md:'160px'}, float:'right'  ,paddingX:3}} onClick={() => router.push('/user/newlisting')}> Get Started</Button>
</Box>
  )
}

export default index
