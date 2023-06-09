import { Box, Card, Grid ,CardHeader, Typography,IconButton,Chip, Stack, CardContent, Rating, Button,useMediaQuery} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Image from 'next/image'
import React from 'react'
import theme from '@/public/Utils/theme';
import { Bed,Bathtub,Weekend } from '@mui/icons-material';
import FaceIcon from '@mui/icons-material/Face';
import Link from 'next/link';
const index = () => {
   const isSmallScreen = useMediaQuery('(max-width: 600px)');
return (
   <Stack>
<Card sx={{height:{ xs:'auto',md:'402px'},borderRadius: '20px',marginY:5}}>
<Grid  container padding={2} spacing={3}>
   <Grid item xs={12} md={4}>
      <Grid container  spacing={1}>
         <Grid item xs={12} >
            <Box  sx={{height:'253px',position:'relative'}}>
               <Image  src="/Images/list1.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
         <Grid item xs={6}>
            <Box  sx={{height:'109px',position:'relative'}}>
               <Image  src="/Images/list2.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
         <Grid item xs={6}>
            <Box  sx={{height:'109px',position:'relative'}}>
               <Image  src="/Images/list3.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
      </Grid>
   </Grid>
   <Grid item xs={12} md={8}>
      <CardHeader   
      action={  
      <IconButton aria-label="settings">
         <FavoriteBorderIcon/>
      </IconButton>
      }
      title= {
      <Stack  direction={'row'} spacing={6} >
         <Typography fontWeight={700}> 2 Bedroom house for sale  </Typography>
         <Chip label="Featured"  size='small' sx={{background:'rgba(143, 144, 188, 0.15)',paddingX:2,color:theme.primary,fontWeight:700}}/>
      </Stack>
      }
      subheader={ 
      <Typography variant='caption' > Stainton Road, London, SE6</Typography>
      }
      />
      <CardContent sx={{paddingY:0}}>
        <Box sx={{height:{xs:'auto',md:'200px' }}}>
         
         <Typography  sx={{color:theme.light}}> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.may be used as a placeholder before the final copy Lorem ipsum may be used as a placeholder before the final copy may be used as a placeholder beffinal copyis available. It is also used to... 
           <Link href="/site/listing_detail" style={{textDecoration:'none'}}>  See more </Link></Typography>
         
       
         <Stack marginTop={3} spacing={{xs:2,sm:6}} direction={'row'} >
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}>2 Bedrooms  </Typography>
            </Stack>
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}>2 Bathrooms </Typography>
            </Stack>
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}> 2 Receptions  </Typography>
            </Stack>
         </Stack>




         </Box>


         {/* {!isSmallScreen  && */}
         <Box>
            <Stack  direction={'row'} sx={{display:'flex' , justifyContent:'space-between'}}> 
            <Typography sx={{color:theme.light}}>Added on 01 Feb 2023</Typography>
            <Typography  sx={{color:theme.light}}>Available from 01 Mar 2023</Typography>
            <Typography variant='h6' fontWeight={800}> £1,500 pcm</Typography>
            </Stack>
            <hr />
            <Stack direction={'row'}>
               <Stack direction={'row'}  spacing ={1} sx={{display:'flex' ,alignItems:'center'}}> 
               <Box  sx={{width:30 ,height:30,position:'relative'}}>
               <Image  src="/Images/list4.png"   alt="Logo"  fill/>
         </Box>
         <Typography>Posted by X Builder</Typography>
         <Chip
         label="Agency"
         size="small"
         deleteIcon={<IconButton><CheckCircle/></IconButton>}
         icon={<CheckCircle sx={{color:'#27AE60'}}/>}
         />
         <Rating
            name="simple-controlled"
            value={2}
            size='small'
            sx={{paddingLeft:2}}
            />
         </Stack>
         
         <Link href="/site/listing_detail" style={{textDecoration:'none',marginLeft:'auto',paddingX: 2}}>  <Button variant='contained' size="small"  > See More</Button> </Link>
         </Stack>
         </Box>
{/* } */}
      </CardContent>
   </Grid>
</Grid>
</Card>

<Card sx={{height:{ xs:'auto',md:'402px'},borderRadius: '20px',marginY:5}}>
<Grid  container padding={2} spacing={3}>
   <Grid item xs={12} md={4}>
      <Grid container  spacing={1}>
         <Grid item xs={12} >
            <Box  sx={{height:'253px',position:'relative'}}>
               <Image  src="/Images/list1.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
         <Grid item xs={6}>
            <Box  sx={{height:'109px',position:'relative'}}>
               <Image  src="/Images/list2.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
         <Grid item xs={6}>
            <Box  sx={{height:'109px',position:'relative'}}>
               <Image  src="/Images/list3.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
      </Grid>
   </Grid>
   <Grid item xs={12} md={8}>
      <CardHeader   
      action={  
      <IconButton aria-label="settings">
         <FavoriteBorderIcon/>
      </IconButton>
      }
      title= {
      <Stack  direction={'row'} spacing={6} >
         <Typography fontWeight={700}> 2 Bedroom house for sale  </Typography>
         <Chip label="Featured"  size='small' sx={{background:'rgba(143, 144, 188, 0.15)',paddingX:2,color:theme.primary,fontWeight:700}}/>
      </Stack>
      }
      subheader={ 
      <Typography variant='caption' > Stainton Road, London, SE6</Typography>
      }
      />
      <CardContent sx={{paddingY:0}}>
        <Box sx={{height:{xs:'auto',md:'200px' }}}>
         
         <Typography  sx={{color:theme.light}}> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.may be used as a placeholder before the final copy Lorem ipsum may be used as a placeholder before the final copy may be used as a placeholder beffinal copyis available. It is also used to... 
           <Link href="/site/listing_detail" style={{textDecoration:'none'}}>  See more </Link></Typography>
         
       
         <Stack marginTop={3} spacing={{xs:2,sm:6}} direction={'row'} >
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}>2 Bedrooms  </Typography>
            </Stack>
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}>2 Bathrooms </Typography>
            </Stack>
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}> 2 Receptions  </Typography>
            </Stack>
         </Stack>




         </Box>


         {/* {!isSmallScreen  && */}
         <Box>
            <Stack  direction={'row'} sx={{display:'flex' , justifyContent:'space-between'}}> 
            <Typography sx={{color:theme.light}}>Added on 01 Feb 2023</Typography>
            <Typography  sx={{color:theme.light}}>Available from 01 Mar 2023</Typography>
            <Typography variant='h6' fontWeight={800}> £1,500 pcm</Typography>
            </Stack>
            <hr />
            <Stack direction={'row'}>
               <Stack direction={'row'}  spacing ={1} sx={{display:'flex' ,alignItems:'center'}}> 
               <Box  sx={{width:30 ,height:30,position:'relative'}}>
               <Image  src="/Images/list4.png"   alt="Logo"  fill/>
         </Box>
         <Typography>Posted by X Builder</Typography>
         <Chip
         label="Agency"
         size="small"
         deleteIcon={<IconButton><CheckCircle/></IconButton>}
         icon={<CheckCircle sx={{color:'#27AE60'}}/>}
         />
         <Rating
            name="simple-controlled"
            value={2}
            size='small'
            sx={{paddingLeft:2}}
            />
         </Stack>
         
         <Link href="/site/listing_detail" style={{textDecoration:'none',marginLeft:'auto',paddingX: 2}}>  <Button variant='contained' size="small"  > See More</Button> </Link>
         </Stack>
         </Box>
{/* } */}
      </CardContent>
   </Grid>
</Grid>
</Card>

<Card sx={{height:{ xs:'auto',md:'402px'},borderRadius: '20px',marginY:5}}>
<Grid  container padding={2} spacing={3}>
   <Grid item xs={12} md={4}>
      <Grid container  spacing={1}>
         <Grid item xs={12} >
            <Box  sx={{height:'253px',position:'relative'}}>
               <Image  src="/Images/list1.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
         <Grid item xs={6}>
            <Box  sx={{height:'109px',position:'relative'}}>
               <Image  src="/Images/list2.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
         <Grid item xs={6}>
            <Box  sx={{height:'109px',position:'relative'}}>
               <Image  src="/Images/list3.png"   alt="Logo"  fill/>
            </Box>
         </Grid>
      </Grid>
   </Grid>
   <Grid item xs={12} md={8}>
      <CardHeader   
      action={  
      <IconButton aria-label="settings">
         <FavoriteBorderIcon/>
      </IconButton>
      }
      title= {
      <Stack  direction={'row'} spacing={6} >
         <Typography fontWeight={700}> 2 Bedroom house for sale  </Typography>
         <Chip label="Featured"  size='small' sx={{background:'rgba(143, 144, 188, 0.15)',paddingX:2,color:theme.primary,fontWeight:700}}/>
      </Stack>
      }
      subheader={ 
      <Typography variant='caption' > Stainton Road, London, SE6</Typography>
      }
      />
      <CardContent sx={{paddingY:0}}>
        <Box sx={{height:{xs:'auto',md:'200px' }}}>
         
         <Typography  sx={{color:theme.light}}> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.may be used as a placeholder before the final copy Lorem ipsum may be used as a placeholder before the final copy may be used as a placeholder beffinal copyis available. It is also used to... 
           <Link href="/site/listing_detail" style={{textDecoration:'none'}}>  See more </Link></Typography>
         
       
         <Stack marginTop={3} spacing={{xs:2,sm:6}} direction={'row'} >
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}>2 Bedrooms  </Typography>
            </Stack>
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}>2 Bathrooms </Typography>
            </Stack>
            <Stack  direction={'row'} spacing={1}  >
               <Bed  sx={{color:theme.light}} />
               <Typography  sx={{color:theme.light}}> 2 Receptions  </Typography>
            </Stack>
         </Stack>




         </Box>


         {/* {!isSmallScreen  && */}
         <Box>
            <Stack  direction={'row'} sx={{display:'flex' , justifyContent:'space-between'}}> 
            <Typography sx={{color:theme.light}}>Added on 01 Feb 2023</Typography>
            <Typography  sx={{color:theme.light}}>Available from 01 Mar 2023</Typography>
            <Typography variant='h6' fontWeight={800}> £1,500 pcm</Typography>
            </Stack>
            <hr />
            <Stack direction={'row'}>
               <Stack direction={'row'}  spacing ={1} sx={{display:'flex' ,alignItems:'center'}}> 
               <Box  sx={{width:30 ,height:30,position:'relative'}}>
               <Image  src="/Images/list4.png"   alt="Logo"  fill/>
         </Box>
         <Typography>Posted by X Builder</Typography>
         <Chip
         label="Agency"
         size="small"
         deleteIcon={<IconButton><CheckCircle/></IconButton>}
         icon={<CheckCircle sx={{color:'#27AE60'}}/>}
         />
         <Rating
            name="simple-controlled"
            value={2}
            size='small'
            sx={{paddingLeft:2}}
            />
         </Stack>
         
         <Link href="/site/listing_detail" style={{textDecoration:'none',marginLeft:'auto',paddingX: 2}}>  <Button variant='contained' size="small"  > See More</Button> </Link>
         </Stack>
         </Box>
{/* } */}
      </CardContent>
   </Grid>
</Grid>
</Card>

</Stack>
)
}
export default index