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


   {Data.map((item,index)=> (

   <Grid item lg={item.Size} xs={12} sm={6}  key={index}>

      <Stack spacing={1.5}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> {item.Title} </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> 
         </Stack>


         {index == 0 ?   
      <Field    fullWidth placeholder={item.Placeholder}  type={item.Type} size='small' sx={{width:{md:'100%', lg:'32.1%' } }}/>

         :
      

         item.Menu == null ?  
         <Field    fullWidth placeholder={item.Placeholder}  type={item.Type} size='small'/>
         :

         <Field     defaultValue='0'  select   fullWidth    size='small'>

            {/* Label */}

            <MenuItem  value={0} >  <Typography variant='body1' color={'#8F8F8F'}>{item.Label} </Typography> </MenuItem>

            {item.Menu.map((item1 ,index1) => (  
            <MenuItem  value={index1 + 1} key={index}> {item1.Title}</MenuItem> 
            )) }

         </Field>
         }


      </Stack>

   </Grid>
   ))}
    
    <Grid item xs={12} sx={{marginY:{xs:3,md:1,lg:12} ,display:'flex',justifyContent:'space-between'}}>
    <Button variant='outlined' sx={{ paddingX:{xs:5, sm :8 ,md:5, lg:8},display:{xs:'none',sm:'block'}}}   onClick={()=> setActiveTab(2)}  > Back</Button>
    <Stack direction={'row'} spacing={1} marginLeft={{xs:'auto' , sm:'none'}}>
    <Button variant='outlined' sx={{ paddingX:{xs:1.5,md:2,lg:3}}}  size='small'> Preview Listing</Button>
    <Button variant='contained' sx={{ paddingX:{xs:1.5,md:2,lg:3}}}  size='small'> Proceed to Payment</Button>
    </Stack>
   

    </Grid>
</Grid>

)
}
export default Tab4



export const Data = [
    
    {
        Title:'Rental Price (£ pcm)',
        Size: 12,
          Type:'text',
        Placeholder:'Enter your Price',
        Menu : null
    },

   
    {
        Title:'Deposit (£)',
        Size: 4,
        Placeholder:'Deposit',
        Type:'text',
        Menu : null

    },
    {
        Title:'Rental Type',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
    {
        Title:'All Bills',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
    {
        Title:'Accommodation',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
    {
        Title:'Furnish Type',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },

    {
        Title:'Furnish Type',
        Size: 4,
        Type:'date',
        Label:'',
        Menu : null

    },
]