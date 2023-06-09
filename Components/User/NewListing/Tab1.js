import { Grid, Typography ,Stack, TextField,MenuItem,Box,Button,InputBase,IconButton,Paper} from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/router';
const Tab1 = ({setActiveTab}) => {
   const router = useRouter();
   const PaperStyle ={
      ml: 2,backgroundColor:'#F9F9F9',border: '1px solid #E6E6E6', display: 'flex', 
      alignItems: 'center' ,borderRadius:'8px',height:'42px',boxShadow:'none'
   }
return (
<Grid container marginTop={3} spacing={2}>


   {Data.map((item,index)=> (

   <Grid item lg={item.Size} xs={12} sm={6} key={index}>

      <Stack spacing={1.5}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> {item.Title} </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' ,display:{xs:'none',lg:'block'}}}/> 
         </Stack>


         {index == 0 ?   
         <TextField     defaultValue='0'  select      size='small' sx={{width:{xs:'100%', lg:'32.1%' } }}>

            {/* Label */}
            <MenuItem  value={0} > <Typography variant='body1' color={'#8F8F8F'}>{item.Label} </Typography>    </MenuItem>

            {item.Menu.map((item1 ,index1) => (  
            <MenuItem  value={index1 + 1} key={index}> {item1.Title}</MenuItem> 
            )) }

         </TextField>

         :
         index == 1 ?  
         <Paper sx={PaperStyle} >
    
       <InputBase  sx={{ ml: 2,backgroundColor:'transparent',border:'transparent' }}  fullWidth placeholder={item.Placeholder} />
       <IconButton type="button"   sx={{backgroundColor:'#E6E6E6' ,height:'42px',borderRadius: '0px 5px 5px 0px'}}> <SearchIcon />  </IconButton>
      </Paper>
        
         : 

         item.Menu == null ?  
         <TextField    fullWidth placeholder={item.Placeholder}  type={item.Type} size='small'/>
         :

         <TextField     defaultValue='0'  select   fullWidth    size='small'>

            {/* Label */}

            <MenuItem  value={0} >  <Typography variant='body1' color={'#8F8F8F'}>{item.Label} </Typography> </MenuItem>

            {item.Menu.map((item1 ,index1) => (  
            <MenuItem  value={index1 + 1} key={index}> {item1.Title}</MenuItem> 
            )) }

         </TextField>
         }


      </Stack>

   </Grid>
   ))}
    
    <Grid item xs={12} sx={{marginY:{xs:3,md:1} ,display:'flex',justifyContent:'space-between'}}>
    <Button variant='outlined' sx={{ paddingX:{xs:5,sm:8}}}  onClick={() => router.push('/user/createlisting')}> Back</Button>
    <Button variant='contained' sx={{ paddingX:{xs:5,sm:8}}} onClick={()=> setActiveTab(1)} > Next</Button>

   

    </Grid>
</Grid>

)
}
export default Tab1



export const Data = [
    
    {
        Title:'Property type',
        Size: 12,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },


    {
        Title:'Postcode',
        Size: 4,
        Placeholder:'Please Enter Postcode',  
        Type:"number",
        Menu:null
       
    },

    {
        Title:'Address',
        Size: 8,
        Placeholder:'Please Enter Address',  
        Type:"text",
        Menu:null
       
    },

    // {
    //     Title:'Location Displayed',
    //     Size: 12,
    //     Placeholder:'Please Enter Location Displayed',  
    //     Type:"text",
    //     Menu:null
       
    // },

   
    {
        Title:'Bedroom',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
    {
        Title:'Bathroom',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
    {
        Title:'Reception',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
    {
        Title:'EPC rating status',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
    {
        Title:'Gas Safety status',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },

    {
        Title:'EISR status',
        Size: 4,
        Label:'Select Type',
        Menu : [
       { Title:'Buy' },
       { Title:'Rent' } 
    ] 

    },
]