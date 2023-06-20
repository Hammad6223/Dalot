import { Box,CssBaseline ,Toolbar} from '@mui/material'
import React from 'react'
import TopBar from '@/Components/Site/Navbar/TopBar'
import SideBar from '@/Components/Site/Navbar/SideBar'



import Forget from '@/Components/Site/Forget'

const signup = () => {
  return (
    <Box sx={{ marginX:{xs:2,sm:3} }}>
    <CssBaseline />
      <TopBar />
      <SideBar />
      <Box  sx={{ marginX:{xs:0,sm:8,md:8,lg:13} }}>
        <Toolbar />
    
        <Forget />

       
        </Box>

      
    </Box>
  )
}


export default signup



