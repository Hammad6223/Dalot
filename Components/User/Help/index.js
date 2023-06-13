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
     <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
     <Typography fontWeight={800}  variant={isSmallscreen ? 'p' : 'h5'}   > Help & Support </Typography>
     <Button variant='contained'  size={isSmallscreen ? 'small' : 'medium'} onClick={() => router.push('/user/ticket')}>Submit a ticket</Button>
     </Box>

     <Stack sx={{height:{xs:'auto',md:500},border:{xs:'none',md:'1px solid #C4C4C4'},padding:{xs:0,md:3},marginTop:4 ,marginBottom:{xs:2,md:0}}}>

   <Typography sx={{color:theme.primary,fontWeight:800}}>Your Tickets</Typography>
<Box sx={{backgroundColor:'rgba(196, 196, 196, 0.2)' ,height:55,padding:1}}>
<Stack direction={'row'} sx={{display:'flex' ,justifyContent:'space-between'}}> 
   <TextField size='small' placeholder='Search Requests' sx={{backgroundColor:'#fff',borderRadius:'8px'}} />
   <Stack direction={'row'} spacing={1} sx={{display:'flex',alignItems:'center'}}>
   <Typography fontWeight={800} sx={{display:{xs:'none',sm:'block'}}}> Status : </Typography>
   <FormControl  sx={{backgroundColor:'#fff',paddingX:0}} size='small'>
 
  <Select
  
  sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } ,  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{ border: 0, }, }}
    value={10}
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

   </Stack>
</Stack>

</Box>


<TableContainer  >
      <Table sx={{ minWidth: 650, }} aria-label="simple table"  size='small'>
        <TableHead >
          <TableRow>
        
            <TableCell align="left"  sx={Head}>id</TableCell>
            <TableCell align="left" sx={Head}>Subject</TableCell>
            <TableCell align="center" sx={Head}>Created</TableCell>
            <TableCell align="center" sx={Head} >Status </TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell align="left" sx={{fontWeight:700}}>{row.id}</TableCell>
              <TableCell align="left" sx={{color:theme.primary,fontWeight:800}}>{row.subject}</TableCell>
              <TableCell align="center"  sx={{fontWeight:700}}> {row.created}</TableCell>
           
              <TableCell align="center"  sx={{fontWeight:700}}>

              <Chip label="Solved"  size= 'small' sx={{background:'#6FCF97',color:'#fff',fontWeight:700 ,borderRadius:0.5}}/>
      
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

     </Stack>
 
    </Box>
  )
}

export default index
