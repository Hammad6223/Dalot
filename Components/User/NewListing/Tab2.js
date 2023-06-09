import { Grid, Typography ,Stack, TextField,MenuItem,Box,Button,InputBase,IconButton,Paper, TextareaAutosize} from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
const Tab2 = ({setActiveTab}) => {
const PaperStyle ={
ml: 2,backgroundColor:'#F9F9F9',border: '1px solid #E6E6E6', display: 'flex', 
alignItems: 'center' ,width:{xs:'100%', sm:'60%', lg:'32.1%' } ,borderRadius:'8px',height:'42px',boxShadow:'none'
}
return (
<Grid container marginTop={3} spacing={2}>

   <Grid item  xs={12}  >
      <Stack spacing={1.5}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Key features  </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> 
         </Stack>
         <Paper sx={PaperStyle}>
            <InputBase  sx={{ ml: 2,backgroundColor:'transparent',border:'transparent' }}  fullWidth placeholder="e.g  Near to city" />
            <Button type="button"   sx={{backgroundColor:'#E6E6E6' ,height:'42px',borderRadius: '0px 5px 5px 0px'}}> ADD  </Button>
         </Paper>
      </Stack>
   </Grid>


   <Grid item  xs={12}  sx={{marginTop:5}} >

   <Stack spacing={1.5}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Description  </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> 
         </Stack>
       
      
   <TextField multiline fullWidth placeholder='(Max 500 words)' rows={5} />

   </Stack>

    </Grid>

    <Grid item xs={12} sx={{marginY:{xs:3,md:3} ,display:'flex',justifyContent:'space-between'}}>
    <Button variant='outlined' sx={{ paddingX:{xs:5,sm:8}}}  onClick={()=> setActiveTab(0)}> Back</Button>
    <Button variant='contained' sx={{ paddingX:{xs:5,sm:8}}} onClick={()=> setActiveTab(2)} > Next</Button>

   

    </Grid>


</Grid>

)
}
export default Tab2