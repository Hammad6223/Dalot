import { Box,CardHeader,Typography,Stack,IconButton,Chip ,Grid, Button,ListItemText} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Data,Data1,Data2 } from './Constant';
import Image from 'next/image';
import theme from '@/public/Utils/theme';
import React from 'react'
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const index = () => {
  return (
    <Box>
       <CardHeader   
      action={ 
        <Stack spacing={2} direction={'row'}>
          <Button startIcon={<FavoriteBorderIcon/> }  size='small' sx={{border:'1px solid #A4A4A4' ,paddingX:2,borderRadius:'20px'}} > save</Button>
          <Button startIcon={<IosShareIcon/> }  size='small' sx={{border:'1px solid #A4A4A4' ,paddingX:2,borderRadius:'20px'}} > share</Button>
         
          </Stack> 
      // <IconButton aria-label="settings">
      //    <FavoriteBorderIcon/>
      // </IconButton>
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


<Grid  container  spacing={3}>
  
<LeftSide />

    <RightSide />
     </Grid>

   
    </Box>
  )
}

export default index
