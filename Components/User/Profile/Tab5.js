import { Grid, Typography ,Stack, TextField,MenuItem,Button} from '@mui/material'
import React from 'react';

import InfoIcon from '@mui/icons-material/Info';

// let adjustedText = parse(content);\
import { Field } from '@/styles/Field';
const Tab5 = ( ) => {


return (

<Grid container spacing={2}>

   <Grid item xs={12} marginTop={3}>
      <Stack spacing={2}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Change Password</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>
         </Stack>

         <Grid container >
            <Grid item xs={12}sm={4} >
               <TextField  fullWidth  size='small'  placeholder='Old Password'/>
            </Grid>
            <Grid item xs={12}sm={4} sx={{marginLeft:2}} >
               <TextField  fullWidth  size='small' placeholder='New Password' />
            </Grid>
         </Grid>
      </Stack>
   </Grid>

   <Grid item xs={12} >
      <Stack spacing={1.5}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Change Email</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>
         </Stack>

         <Grid container >
            <Grid item xs={12}sm={4} >
               <TextField  fullWidth  size='small'  placeholder='oldemail@mail.com'/>
            </Grid>
            <Grid item xs={12}sm={4} sx={{marginLeft:2}} >
               <TextField  fullWidth  size='small' placeholder='Enter New Email' />
            </Grid>
         </Grid>
      </Stack>
   </Grid>


   <Grid item xs={12} >
      <Stack spacing={1.5}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}>Change Contact Number</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>
         </Stack>

         <Grid container >
            <Grid item xs={12}sm={4} >
               <TextField  fullWidth  size='small'  placeholder='+44 12345678 '/>
            </Grid>
            <Grid item xs={12}sm={4} sx={{marginLeft:2}} >
               <TextField  fullWidth  size='small' placeholder='Enter New Contact' />
            </Grid>
         </Grid>
      </Stack>
   </Grid>

   <Grid item xs={12} >

<Stack direction={'row'} spacing={2} sx={{marginY:3}}>
<Button variant='outlined' sx={{ paddingX:{xs:5}}}  > Phone Verification</Button>
   <Button variant='outlined' sx={{ paddingX:{xs:5}}}  > Add two Step Authentication</Button>
</Stack>
       
    
   </Grid>

   <Grid item xs={12} sx={{marginY:{xs:1,} ,display:'flex',justifyContent:'space-between'}}>
   <Button variant='outlined' sx={{ paddingX:{xs:5,sm:8}}}  > Cancel</Button>
   <Button variant='contained' sx={{ paddingX:{xs:5,sm:8}}}  > Save</Button>
   </Grid>

</Grid>
)
}
export default Tab5