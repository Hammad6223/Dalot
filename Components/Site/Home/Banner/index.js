import { Typography,Box, Stack,Paper,Button,InputBase,IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import style from './style';

const index = () => {
 
  return (
 

<Box sx={style.MainBox}>
<Stack sx={{paddingTop:10,paddingLeft:{xs:2,sm:6,md:10}}} spacing={5}>

  <Box sx={style.typo1}> <Typography sx={{fontWeight:900,fontSize:{xs:'2rem',sm:'2.5rem' ,md:'3rem' }, lineHeight:1.2}} >Easy way to rent a perfect property</Typography> </Box>
  <Box sx={style.typo2}>  <Typography variant='h5'>We provide a complete service for rental of real estate.</Typography> </Box>

  <Box> 
  
  <Button sx={{borderRadius:'15px 10px 0px 0px',border:'none', backgroundColor:'#fff',padding:'5px 30px 5px 30px', }}>Buy</Button>
  <Button  sx={{borderRadius:'15px 15px 0px 0px',backgroundColor:'#252B42',border:'none',padding:'5px 30px 5px 30px', }}variant='contained'>Rent</Button>

  <Paper sx={style.paper}>
    
      <InputBase  sx={{ ml: 2,backgroundColor:'transparent',border:'transparent' }}  fullWidth placeholder="e.g. what are the market trends in the consulting industry.... " />
      <IconButton type="button" aria-label="search" sx={style.IconButton}> <SearchIcon />  </IconButton>
  </Paper>
  
  </Box>

</Stack>
</Box>

  )
}

export default index
