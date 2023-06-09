import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
 
];

export default function Tab3() {
  return (
    <TableContainer component={Paper} sx={{marginTop:6}}>
      <Table sx={{ minWidth: 650, }} aria-label="simple table"  size='small'>
        <TableHead sx={{backgroundColor:'rgba(230, 230, 230, 0.5)'}}>
          <TableRow>
            <TableCell sx={{fontWeight:800}}>Type</TableCell>
            <TableCell align="right" sx={{fontWeight:800}}>Created</TableCell>
            <TableCell align="right" sx={{fontWeight:800}}>Title</TableCell>
            <TableCell align="right" sx={{fontWeight:800}}>Transaction ID</TableCell>
            <TableCell align="right" sx={{fontWeight:800}}>Amount</TableCell>
            <TableCell align="right" sx={{fontWeight:800}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">

              <Chip label="Completed"  size= 'small' sx={{background:'#29CC6A',color:'#fff',fontWeight:700}}/>
      
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
