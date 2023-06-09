import { Box,CssBaseline ,Grid,Toolbar} from '@mui/material'
import React from 'react'
import TopBar from '@/Components/Site/Navbar/TopBar'
import SideBar from '@/Components/Site/Navbar/SideBar'
import LeftBar from './LeftBar'


const Layout = ({children}) => {
  return (

      <Box sx={{ marginX:{xs:2,sm:3} }}>
      <CssBaseline />
        <TopBar />
      
        <Box  sx={{ pt:5  }}>
          <Toolbar />
          <SideBar />


      
      {children}
       



        </Box>

      
    </Box>
  )
}

export default Layout
