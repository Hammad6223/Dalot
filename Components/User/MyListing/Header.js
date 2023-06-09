import theme from '@/public/Utils/theme'
import {Box,Typography, Stack, Button, IconButton} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import React from 'react'
import Link from 'next/link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Header = () => {
   const style={
      '& .MuiTab-root.Mui-selected':{
       fontSize:'18px',
      } ,

      '& .MuiTab-root':{
         fontSize:'16px',
         color:theme.primary,
         textTransform:'capitalize'
      }

   }
   
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   
  return (

         <Box sx={{display:'flex',justifyContent:'space-between',}}>

    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={style}  >

          <Tab label="My Listings" />
          <Tab label="Saved" />
       
     </Tabs>


  <Stack direction={'row'} sx={{display:'flex',alignItems:'center'}} spacing={{xs:0,md:3}}>

  <Stack direction={'row'}  sx={{display:'flex',alignItems:'center'}}>

  <IconButton> <FilterListIcon /> </IconButton>

   <Typography sx={{display:{xs:'none',md:'block'}}}>Status</Typography>

   </Stack>

   <Link href="/user/createlisting">
    
    <Button variant='contained' sx={{paddingX:{sm:2,md:5} ,display:{xs:'none',md:'block'}}}>New Listing</Button></Link>

<IconButton sx={{display:{xs:'block',md:'none'}}}> <PlaylistAddIcon  sx={{marginTop:1}}/> </IconButton>
</Stack>
</Box>

   
  )
}

export default Header
