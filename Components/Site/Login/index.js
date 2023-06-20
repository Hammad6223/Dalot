import { Box, Grid, Typography,Stack,FormControlLabel ,Checkbox, Button} from '@mui/material'
import React, { useEffect } from 'react'
import { Field } from '@/styles/Field';
import InfoIcon from '@mui/icons-material/Info';
import Image from 'next/image';
import { useRouter } from 'next/router';
import theme from '@/public/Utils/theme';
import Link from 'next/link';

import { GlobalLoginContext } from '@/contexts/LoginContext';


const index = () => {
   const Handler = GlobalLoginContext();

   useEffect(() => {
    Handler.setcheck(2)
   }, []);
   
   console.log(Handler.check)
const router = useRouter();

return (

<Box>
 

   <Grid container   sx={{marginTop:{xs:0,sm:3},width:{xs:'100%' ,md:'90%',lg:'70%'} ,marginX:'auto' }}>

      <Grid item  xs={12} sm={8} md={5} sx={{marginX:'auto'}}>

      <Typography sx={{fontWeight:700,letterSpacing:3,fontSize:{xs:'1.3rem',sm:'1.5rem'}}}  >LOG IN</Typography>
      <Typography sx={{color:'#8A8888'}}>Gain access for the rental experience</Typography>

         <Grid container  spacing={2} marginTop={2}>

          

            <Grid item  xs={12}  >

               <Stack spacing={1.5}>
                  <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
                     <Typography fontWeight={700}>Email </Typography>
                     <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
                  </Stack>
                  <Field    fullWidth   type='email' size='small' />
               </Stack>

      

           </Grid>

  <Grid item  xs={12}  >

               <Stack spacing={1.5}>
                  <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
                     <Typography fontWeight={700}>Password </Typography>
                     <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
                  </Stack>
                  <Field    fullWidth   type='email' size='small' />
               </Stack>

      

         </Grid>
       
         <Stack sx={{marginX:'auto',alignItems:'center' ,marginTop:3}} spacing={1}>
            <Button variant='contained' sx={{paddingX:13,marginTop:1}} size='large'  onClick={() => router.push('/user/mylisting')}> Login </Button>
       <Link href={'/site/forget' } style={{textDecoration:'none'}}>    <Typography sx={{color:theme.primary,fontWeight:800}} > Forgot Password? </Typography> </Link>
           </Stack>

        </Grid>
      </Grid>
      <Grid item xs={7}   sx={{display:{xs:'none',md:'block'} }} >
         <Box   sx={{width: { xs:'350px' ,lg:'400px' } ,height:{xs:'290px',lg:'350px'} , position:'relative',marginLeft:{xs:10,lg:20} }}>
         <Image  src="/Images/login.png"   alt="Logo"  fill/>
      </Box>
       
    </Grid>

 </Grid>

</Box>
) 
}
export default index