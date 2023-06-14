import { Grid, Typography ,Stack,MenuItem,Box,Button,InputBase,IconButton,Paper} from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Field } from '@/styles/Field';
import SearchIcon from '@mui/icons-material/Search';
const Tab4 = ({setActiveTab}) => {
   const PaperStyle ={
      ml: 2,backgroundColor:'#F9F9F9',border: '1px solid #E6E6E6', display: 'flex', 
      alignItems: 'center' ,borderRadius:'8px',height:'42px',boxShadow:'none'
   }
return (
<Grid container marginTop={3} spacing={2}>


      <Grid item xs={12} container >
        <Grid item xs={4}>
      <Stack spacing={0.2}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> 
               Lettings Type  
            </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
         </Stack>
         <Field     defaultValue='0'  select      size='small' >
            {/* Label */}
            <MenuItem  value={0} >
               <Typography variant='body1' color={'#8F8F8F'}>Select payment method </Typography>
            </MenuItem>
            <MenuItem  value={1} > Credit Card or Debit Card</MenuItem>
            <MenuItem  value={2} > Cash</MenuItem>
         </Field>
      </Stack>
      </Grid>
   </Grid>

   {Data.map((item,index)=> (

   <Grid item lg={item.Size} xs={12} sm={6}  key={index}>

      <Stack spacing={1.5}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> {item.Title} </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> 
         </Stack>


         
         <Field    fullWidth placeholder={item.Placeholder}  type={item.Type} size='small'/>
         



      </Stack>

   </Grid>
   ))}
    
    
    <Grid item xs={12} sx={{marginY:{xs:3,md:5} ,display:'flex',justifyContent:'space-between'}}>
    <Button variant='outlined' sx={{ paddingX:{xs:5,sm:8}}}  onClick={()=> setActiveTab(1)}> Back</Button>
    <Button variant='contained' sx={{ paddingX:{xs:5,sm:8}}} onClick={()=> setActiveTab(3)} > Next</Button>
    </Grid>

</Grid>

)
}
export default Tab4



export const Data = [
    
    {
        Title:'CardHolder Name ',
        Size: 4,
        Type:'text',
        Placeholder:'Card on name',
      
    },

   
    {
        Title:'Card Number',
        Size: 8,
        Placeholder:'**** **** **** ****',
        Type:'number',
    },


    {
        Title:'CVC',
        Size: 4,
        Label:'Select Type',
        Placeholder:'eg: 123',
        Type:'number',

    },
    {
      Title:'Expiration Date',
      Size: 4,
      Placeholder:'',
      Type:'date',
    },
    {
      Title:'Price',
      Size: 4,
      Placeholder:'',
      Type:'Price',
    },
]