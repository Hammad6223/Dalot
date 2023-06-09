import theme from '@/public/Utils/theme'
import { Card, Grid ,Box,Typography, Stack, Button,Chip,useMediaQuery} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Details from './Details';
import Header from './Header';
const index = () => {

   const isSmallScreen = useMediaQuery('(max-width: 600px)');
   const handleDelete = () => {
     
    };
    
return (

<Box> 

   <Header />

   {/* Card Start */}

   <Card sx={{marginTop:5}}>
      <Grid container paddingY={2} spacing={2} paddingX={{xs:1,sm:2}}>

         {/* Image Section  */}
         <Grid item md={3} xs={12}  sx={{ display:{ xs:'block',sm:'none',md:'block' } }} >
            <Box  sx={{height:'170px',position:'relative'}}>
               <Image  src="/Images/list5.jpg"  alt="Logo"  fill  />
               <Button  variant='contained' sx={{marginTop:1 ,marginLeft:1,backgroundColor:'#fff',color:'black',fontWeight:'700'}} size='small'>Buy</Button>
            </Box>

          
         </Grid>

         {/* Right Side */}
         <Grid item  xs={12} md={9} paddingLeft={2}  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}> 
        
         <Box sx={{display:'flex',justifyContent:'space-between'}}  >

            <Stack >
               <Typography fontWeight={700} variant='h6' sx={{lineHeight:1.2}}> 2 Bedroom house for sale  </Typography>
               <Typography variant='body2'>Stainton Road, London, SE6  </Typography>
               <Typography variant='caption' fontWeight={700} > Ref No: 8584783</Typography>
            </Stack>
     


            <Chip label="Active"  size={isSmallScreen ? 'small' : 'medium'}  sx={{background:'#ebfcf2',paddingX:{xs:0,sm:2},color:'#27AE60',fontWeight:700}}/>
         </Box>

{/* Detail comonent */}
        <Details />


         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Chip   label="More Actions"  size={isSmallScreen ? 'small' : 'medium'}
              sx={{background:'#edeefc',paddingX:1,color:'#2E3192',fontWeight:700}} 
            deleteIcon={<ArrowForwardIosIcon  sx={{display:{xs:'none',sm:'block'}}}/> }    onDelete={handleDelete}
            />
            <Typography fontWeight={700} variant='h6'  > £1,500 pcm  </Typography>
         </Box>


      </Grid>

      {/* END LEFT SIDE */}
      </Grid>


   </Card>

  
   <Card sx={{marginTop:5}}>
      <Grid container paddingY={2} spacing={2} paddingX={{xs:1,sm:2}}>

         {/* Image Section  */}
         <Grid item md={3} xs={12}  sx={{ display:{ xs:'block',sm:'none',md:'block' } }} >
            <Box  sx={{height:'170px',position:'relative'}}>
               <Image  src="/Images/list5.jpg"  alt="Logo"  fill  />
               <Button  variant='contained' sx={{marginTop:1 ,marginLeft:1,backgroundColor:'#fff',color:'black',fontWeight:'700'}} size='small'>Buy</Button>
            </Box>

          
         </Grid>

         {/* Right Side */}
         <Grid item  xs={12} md={9} paddingLeft={2}  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}> 
        
         <Box sx={{display:'flex',justifyContent:'space-between'}}  >

            <Stack >
               <Typography fontWeight={700} variant='h6' sx={{lineHeight:1.2}}> 2 Bedroom house for sale  </Typography>
               <Typography variant='body2'>Stainton Road, London, SE6  </Typography>
               <Typography variant='caption' fontWeight={700} > Ref No: 8584783</Typography>
            </Stack>
     


            <Chip label="Active"  size={isSmallScreen ? 'small' : 'medium'}  sx={{background:'#ebfcf2',paddingX:{xs:0,sm:2},color:'#27AE60',fontWeight:700}}/>
         </Box>

{/* Detail comonent */}
        <Details />


         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Chip   label="More Actions"  size={isSmallScreen ? 'small' : 'medium'}
              sx={{background:'#edeefc',paddingX:1,color:'#2E3192',fontWeight:700}} 
            deleteIcon={<ArrowForwardIosIcon  sx={{display:{xs:'none',sm:'block'}}}/> }    onDelete={handleDelete}
            />
            <Typography fontWeight={700} variant='h6'  > £1,500 pcm  </Typography>
         </Box>


      </Grid>

      {/* END LEFT SIDE */}
      </Grid>


   </Card>


   <Card sx={{marginTop:5}}>
      <Grid container paddingY={2} spacing={2} paddingX={{xs:1,sm:2}}>

         {/* Image Section  */}
         <Grid item md={3} xs={12}  sx={{ display:{ xs:'block',sm:'none',md:'block' } }} >
            <Box  sx={{height:'170px',position:'relative'}}>
               <Image  src="/Images/list5.jpg"  alt="Logo"  fill  />
               <Button  variant='contained' sx={{marginTop:1 ,marginLeft:1,backgroundColor:'#fff',color:'black',fontWeight:'700'}} size='small'>Buy</Button>
            </Box>

          
         </Grid>

         {/* Right Side */}
         <Grid item  xs={12} md={9} paddingLeft={2}  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',}}> 
        
         <Box sx={{display:'flex',justifyContent:'space-between'}}  >

            <Stack >
               <Typography fontWeight={700} variant='h6' sx={{lineHeight:1.2}}> 2 Bedroom house for sale  </Typography>
               <Typography variant='body2'>Stainton Road, London, SE6  </Typography>
               <Typography variant='caption' fontWeight={700} > Ref No: 8584783</Typography>
            </Stack>
     


            <Chip label="Active"  size={isSmallScreen ? 'small' : 'medium'}  sx={{background:'#ebfcf2',paddingX:{xs:0,sm:2},color:'#27AE60',fontWeight:700}}/>
         </Box>

{/* Detail comonent */}
        <Details />


         <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Chip   label="More Actions"  size={isSmallScreen ? 'small' : 'medium'}
              sx={{background:'#edeefc',paddingX:1,color:'#2E3192',fontWeight:700}} 
            deleteIcon={<ArrowForwardIosIcon  sx={{display:{xs:'none',sm:'block'}}}/> }    onDelete={handleDelete}
            />
            <Typography fontWeight={700} variant='h6'  > £1,500 pcm  </Typography>
         </Box>


      </Grid>

      {/* END LEFT SIDE */}
      </Grid>


   </Card>

</Box>
)
}
export default index