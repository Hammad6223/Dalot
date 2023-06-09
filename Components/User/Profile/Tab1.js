import { Grid, Typography ,Stack, TextField,MenuItem,Button} from '@mui/material'
import React, { useState, useRef } from 'react';
const parse = require('html-react-parser');
import InfoIcon from '@mui/icons-material/Info';
import dynamic from 'next/dynamic';
// let adjustedText = parse(content);

const Tab1 = ( ) => {

const editor = useRef(null);

const JoditEditor = dynamic(() => import('jodit-react'), {
ssr: false,   
loading: () => <p>Loading...</p>,
})

const [content, setContent] = useState('');

return (
<Grid container spacing={2}>

   <Grid item xs={12} marginTop={3}>
      <Stack spacing={1.5}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Account Type</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>
         </Stack>
         <Grid container  >
            <Grid  item xs={12} sm={8} sx={{display:'flex'}}>
               <TextField     defaultValue='0'  select   fullWidth    size='small'>
                  <MenuItem  value={0} >
                     <Typography variant='body1' color={'#8F8F8F'}>Select Type </Typography>
                  </MenuItem>
                  <MenuItem  value={1} >Landlord </MenuItem>
               </TextField>
            </Grid>
         </Grid>
      </Stack>
   </Grid>

   <Grid item xs={12}sm={4} >
      <Stack spacing={1}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> First Names</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>
         </Stack>
         <TextField  fullWidth  size='small' />
      </Stack>
   </Grid>

   <Grid item xs={12}sm={4} >
      <Stack spacing={1}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Last Name</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>
         </Stack>
         <TextField  fullWidth  size='small' />
      </Stack>
   </Grid>

   <Grid item xs={12}sm={4} >
      <Stack spacing={1}>
         <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
            <Typography fontWeight={700}> Job Title</Typography>
            <InfoIcon fontSize='10px' sx={{color:'#9D9A9A'}}/>
         </Stack>
         <TextField     defaultValue='0'  select   fullWidth    size='small'>
            <MenuItem  value={0} >
               <Typography variant='body1' color={'#8F8F8F'}>Select Type </Typography>
            </MenuItem>
            <MenuItem  value={1} >Manger </MenuItem>
         </TextField>
      </Stack>
   </Grid>

   <Grid item xs={12}>
      <JoditEditor
      ref={editor}
      value={content}
      // config={ {placeholder : 'Start typings...'} }
      tabIndex={1} // tabIndex of textarea
      onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={newContent => {}}
      />
   </Grid>

   <Grid item xs={12} sx={{marginY:{xs:1} ,display:'flex',justifyContent:'space-between'}}>
   <Button variant='outlined' sx={{ paddingX:{xs:5,sm:8}}}  > Cancel</Button>
   <Button variant='contained' sx={{ paddingX:{xs:5,sm:8}}}  > Save</Button>
   </Grid>

</Grid>
)
}
export default Tab1