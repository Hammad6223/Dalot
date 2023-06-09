import { Grid, Typography ,Stack,Button} from '@mui/material'
import React from 'react'

import InfoIcon from '@mui/icons-material/Info';
const Tab3 = ({setActiveTab}) => {

return (
<Grid container marginTop={3} spacing={2}>

   <Grid item  xs={12}  >
      <Stack spacing={1.5}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Upload Property photos  </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> 
         </Stack>
    
      </Stack>
   </Grid>


 

    <Grid item xs={12} sx={{marginY:{xs:3,md:3} ,display:'flex',justifyContent:'space-between'}}>
    <Button variant='outlined' sx={{ paddingX:{xs:5,sm:8}}}  onClick={()=> setActiveTab(1)}> Back</Button>
    <Button variant='contained' sx={{ paddingX:{xs:5,sm:8}}} onClick={()=> setActiveTab(3)} > Next</Button>

   

    </Grid>


</Grid>

)
}
export default Tab3