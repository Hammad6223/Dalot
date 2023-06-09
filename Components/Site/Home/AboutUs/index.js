import { Box, Typography,Stack, Button } from '@mui/material'
import React from 'react'
import style from './style'

const index = () => {
  return (
    <Box   sx={style.MainBox}>
      

<Stack sx={style.stack} spacing={5}>

<Typography sx={style.typo1} >Find your best Real Estate</Typography>
<Typography variant='h5'>We provide a complete service for the rental of real estate.</Typography>
<Button variant='contained' sx={{width:'95%'}}  >Start  &nbsp; my  &nbsp; search</Button>
</Stack>


    </Box>
  )
}

export default index
