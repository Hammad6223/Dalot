import React from 'react'
import { Box,CardHeader,Typography,Stack,IconButton,Chip ,Grid, Button,ListItemText} from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import { Data,Data1,Data2 } from './Constant';
import Image from 'next/image';
import theme from '@/public/Utils/theme';
const RightSide = () => {
  return (
    <>
      <Grid item xs={4} spacing={1} >
       
       <Stack spacing={2} >
             <Box  sx={{height:'232px',position:'relative'}}>
                <Image  src="/Images/list2.png"   alt="Logo"  fill/>
             </Box>
             <Box  sx={{height:'232px',position:'relative'}}>
                <Image  src="/Images/list3.png"   alt="Logo"  fill/>
             </Box>
 
             </Stack>
             </Grid>
    </>
  )
}

export default RightSide
