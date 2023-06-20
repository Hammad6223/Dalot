import { Box, Stack, Typography,Button ,Avatar} from '@mui/material'
import React from 'react'
import Link from 'next/link';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Field } from '@/styles/Field';
import InfoIcon from '@mui/icons-material/Info';
import theme from '@/public/Utils/theme';
const index = () => {
  return (
    <Box marginTop={5}> 
      <Stack sx={{alignItems:'center'}} spacing={1}>
      <Avatar sx={{ bgcolor:'#F1F5F9'}}> <LockPersonIcon  sx={{color:'black'}}/></Avatar>
      <Typography variant='h6' fontWeight={800}> Forget Password </Typography>
      <Typography sx={{fontSize:{xs:14,sm:17}}}>No worrie we will send you reset instruction</Typography>
      </Stack>
      <Stack sx={{alignItems:'center',marginTop:2}} spacing={3}>
      <Stack spacing={1.5} sx={{width:{xs:'250px',sm:'500px' }}}>
                  <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
                     <Typography fontWeight={700}>Email </Typography>
                     <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
                  </Stack>
                  <Field    fullWidth   type='email' size='small' />
               </Stack>

               <Button variant='contained' sx={{paddingX:{xs:12,sm:20}}}> Send </Button>
               <Link href={'/site/login' } style={{textDecoration:'none'}}>    <Typography sx={{color:theme.primary,fontWeight:700}} > Back to Login?</Typography> </Link>
       

      </Stack>

    </Box>
  )
}

export default index
