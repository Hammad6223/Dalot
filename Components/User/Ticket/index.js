import theme from '@/public/Utils/theme';
import { Box ,Typography,Tabs,Tab,useMediaQuery, Button, Stack, TextField} from '@mui/material'
import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRouter } from 'next/router';


function createData(id, subject, created,status ) {
   return { id, subject, created,status };
 }
 
 const rows = [
   createData('1', 'Premium features are not showing', '1 day ago' ),
  
 ];
const index = () => {
  const isSmallscreen = useMediaQuery('(max-width: 600px)');
  const router = useRouter();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const Head = {
   color:'#A4A4B1'
  }

  return (
    <Box>

     <Stack > 
     <Typography fontWeight={800}  variant={isSmallscreen ? 'p' : 'h5'}   > Help & Support </Typography>
     <Typography > Please enter the details of your request. A member of our support staff will respond as soon as possible. </Typography>
      </Stack>

<Stack spacing={2} marginTop={4} sx={{width:{xs:'100%' ,sm:'80%' ,lg:'65%'}}}>
      <Box>
         <Typography>Your Name</Typography>
         <TextField   size='small' fullWidth/>
      </Box>
      <Box>
         <Typography>Your Email Address</Typography>
         <TextField   size='small' fullWidth/>
      </Box>
      <Box>
         <Typography>Subject</Typography>
         <TextField   size='small' fullWidth/>
      </Box>
      <Box>
         <Typography>Message</Typography>
         <TextField  multiline fullWidth  rows={5}  size='small' />
      </Box>

      </Stack>

      <Button variant='contained' sx={{float:'right',marginY:2,paddingX:5}}>Submit</Button>
 
    </Box>
  )
}

export default index
