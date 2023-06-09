import { Grid,Typography,Stack, Button,TextField,RadioGroup  ,Radio ,FormControlLabel,MenuItem, Box,IconButton} from '@mui/material'
import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import InfoIcon from '@mui/icons-material/Info';
const Tab1 = () => {
// Name Detail
const [fields, setFields] = React.useState([{ id: 1, value: '' }]);
const handleAddField = () => {
const newField = { id: fields.length + 1, value: '' };
setFields([...fields, newField]);
};
// Contact Detail
const [fieldContact, setFieldContact] = React.useState([{ id: 1, value: '' }]);
const handleAddFieldContact = () => {
const newField = { id: fieldContact.length + 1, value: '' };
setFieldContact([...fieldContact, newField]);
};
// Check Box
const [check,setcheck] = React.useState(true)
const changeHandler = () => { setcheck(!check); };
return (
<Grid container spacing={3}>

  {/* Start Proposed Tenant   */}

   <Grid item xs={12} marginTop={5}>
      <Stack spacing={0.2}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Proposed Tenant</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>  
         </Stack>

         {fields.map((field) => (
         <Grid container  spacing={1}  key={field.id}>
            <Typography sx={{marginTop:2,display:{xs:'none' ,sm:'block'} }}> {field.id}. </Typography>

            <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between',display:{xs:'flex' ,sm:'none'}}}  >
           <Typography sx={{marginTop:2}}>{field.id}. Tenant {field.id}</Typography>
           <IconButton  onClick={handleAddField}> <PlaylistAddIcon /> </IconButton>
            </Grid>

            <Grid item  xs={12} sm={4.5} sx={{display:'flex'}}>
               <TextField  fullWidth placeholder='First Name'  size='small' />
            </Grid>
            <Grid item  xs={12}  sm={4.5}>
               <TextField  fullWidth placeholder='Last  Name'  size='small'/>
            </Grid>
            <Grid item xs={12}  sm={2.5}> 
               <Button sx={{backgroundColor:'#8F8F8F',paddingY:1,color:'#fff',display:{xs:'none' ,sm:'block'}}}  variant='contained' fullWidth onClick={handleAddField}> Add Another</Button> 
            </Grid>
         </Grid>
         ))}
         
      </Stack>
   </Grid>

  {/* End Proposed Tenant   */}

   <Grid item xs={12} >
      <Stack spacing={0.2}>

         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Contact Details </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>  
         </Stack>

         {fieldContact.map((field) => (
         <Grid container  spacing={1}  key={field.id}>
            <Typography sx={{marginTop:2,display:{xs:'none' ,sm:'block'}}}>{field.id}.</Typography>

            {/* Extra small screen View */}
            <Grid item xs={12} sx={{display:'flex',justifyContent:'space-between',display:{xs:'flex' ,sm:'none'}}}  >
           <Typography sx={{marginTop:2}}>{field.id}. Tenant {field.id}</Typography>
           <IconButton  onClick={handleAddFieldContact}> <PlaylistAddIcon /> </IconButton>
           </Grid>

            <Grid item xs={12}  sm={4.5} sx={{display:'flex'}}>
               <TextField  fullWidth placeholder='+44 123 3456 7'  size='small' />
            </Grid>
            <Grid item xs={12}  sm={4.5}>
               <TextField  fullWidth placeholder='tenantmail@gmail.com'  size='small'/>
            </Grid>
            <Grid item xs={12}  sm={2.5}> 
               <Button sx={{backgroundColor:'#8F8F8F',paddingY:1,color:'#fff',display:{xs:'none' ,sm:'block'}}}  variant='contained' fullWidth onClick={handleAddFieldContact}> Add Another</Button> 
            </Grid>
         </Grid>
         ))}
      </Stack>
   </Grid>


{/*   Term Type   */}
   <Grid item xs={12}  marginTop={2}>
      <Stack spacing={0.2}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> 
               Term Type  
            </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
         </Stack>
         <RadioGroup name="use-radio-group" defaultValue="first" row onChange={changeHandler}>
            <FormControlLabel  value="first"  label="Open Ended"  control={
            <Radio size='small' />
            }/>
            <FormControlLabel   value="second"  label="Fixed Term" control={
            <Radio  size='small' />
            } />
         </RadioGroup>
      </Stack>
   </Grid>'
   
     {/*End  Term Type   */}

   <Grid item xs={12}  >
      <Stack spacing={0.2}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> 
               Lettings Type  
            </Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
         </Stack>
         <TextField     defaultValue='0'  select      size='small' >
            {/* Label */}
            <MenuItem  value={0} >
               <Typography variant='body1' color={'#8F8F8F'}>Select Type </Typography>
            </MenuItem>
            <MenuItem  value={1} > Buy</MenuItem>
            <MenuItem  value={2} > Rent</MenuItem>
         </TextField>
      </Stack>
   </Grid>

   
   <Grid item xs={12} container spacing={4} >
      <Grid item  xs={12} sm={6}>
         <Stack spacing={0.2}>
            <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
               <Typography fontWeight={700}> 
                  Tenancy Duration 
               </Typography>
               <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
            </Stack>
            <TextField    size='small' />
         </Stack>
      </Grid>
      <Grid item  xs={12} sm={6}>
         <Stack spacing={0.2}>
            <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
               <Typography fontWeight={700}> 
                  Auto Renewal 
               </Typography>
               <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
            </Stack>
            <RadioGroup name="use-radio-group" defaultValue="first" row onChange={changeHandler}>
               <FormControlLabel  value="first"  label="Yes"  control={
               <Radio size='small' />
               }/>
               <FormControlLabel   value="second"  label="No" control={
               <Radio  size='small' />
               } />
            </RadioGroup>
         </Stack>
      </Grid>
   </Grid>

   <Grid item xs={12} container spacing={4} >
      <Grid item  xs={12} sm={6}>
         <Stack spacing={0.2}>
            <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
               <Typography fontWeight={700}> 
                  Tenancy Start 
               </Typography>
               <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
            </Stack>
            <TextField    size='small'  type='date'/>
         </Stack>
      </Grid>


      <Grid item   xs={12} sm={6}>
         <Stack spacing={0.2}>
            <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
               <Typography fontWeight={700}> 
                  Tenancy End 
               </Typography>
               <InfoIcon fontSize='10px' sx={{color:'#9D9A9A' }}/> 
            </Stack>
            <TextField    size='small' type='date' />
         </Stack>
      </Grid>

   </Grid>
   <Grid item xs={12} sx={{marginY:{xs:3,md:3} ,display:'flex',justifyContent:'end'}}>
   <Button variant='contained' sx={{ paddingX:{xs:5,sm:8}}} onClick={()=> setActiveTab(1)} > Next</Button>
</Grid>

</Grid>
)
}
export default Tab1