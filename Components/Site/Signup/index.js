import { Box, Grid, Typography,Stack,FormControlLabel ,Checkbox, Button} from '@mui/material'
import React ,{useEffect}from 'react'
import { Field } from '@/styles/Field';
import InfoIcon from '@mui/icons-material/Info';
import { Data } from './Constant';
import Image from 'next/image';
import { useRouter } from 'next/router';
import theme from '@/public/Utils/theme';
import { GlobalLoginContext } from '@/contexts/LoginContext';
const index = () => {

const router = useRouter();
const Handler = GlobalLoginContext();

useEffect(() => {
 Handler.setcheck(1)
}, []);

return (

<Box>
   <Typography sx={{fontWeight:700,letterSpacing:3,fontSize:{xs:'1.3rem',sm:'1.5rem'}}}  >CREATE A PROFILE</Typography>

   <Grid container spacing={4}  sx={{marginTop:{xs:0,sm:3} }}>

      <Grid item  xs={12} md={7}>

         <Grid container  spacing={2}>

            {Data.map((item,index)=> (

            <Grid item  xs={12} sm={item.Size} key={index}>

               <Stack spacing={1.5}>
                  <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
                     <Typography fontWeight={700}> {item.Title} </Typography>
                     <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
                  </Stack>
                  <Field    fullWidth   type={item.Type} size='small' />
               </Stack>

            </Grid>
            )) }

         </Grid>

         <Box sx={{marginTop:5,display:'flex',alignItems:{xs:'start',sm:'center'} }}>
            <Checkbox defaultChecked  size='small' sx={{paddingTop:{xs:0.1,sm:1 }}}/>      
            <Typography sx={{fontSize:{xs:14,sm:16}}}> I agree to the <strong style={{color:theme.primary}}>privacy policy </strong> and <strong style={{color:theme.primary}}> terms of service. </strong> </Typography>
         </Box>

         <Box sx={{display:'flex',justifyContent:'center',marginBottom:{xs:3,sm:0}}}>
            <Button variant='contained' sx={{paddingX:10,marginTop:1}}  onClick={() => router.push('/user/mylisting')}> SIGN UP </Button>
         </Box>

      </Grid>

      <Grid item xs={5} sx={{display:{xs:'none',md:'block'}}} >
         <Box  sx={{width: { xs:'300px' ,lg:'400px' } ,height:{xs:'270px',lg:'350px'},position:'relative' ,marginLeft:'auto'}}>
         <Image  src="/Images/login.png"   alt="Logo"  fill/>
      </Box>
       
    </Grid>
 </Grid>

</Box>
) 
}
export default index