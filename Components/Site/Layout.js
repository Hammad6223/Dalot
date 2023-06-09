import { Box,CssBaseline ,Toolbar} from '@mui/material'
import React from 'react'
import TopBar from './Navbar/TopBar'
import SideBar from './Navbar/SideBar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <Box sx={{ marginX:{xs:2,sm:3} }}>
    <CssBaseline />
      <TopBar />
      <SideBar />
      <Box  sx={{ pt:5 ,marginX:{xs:0,md:4} }}>
        <Toolbar />
    
        {children}

        <Footer />
        </Box>

      
    </Box>
  )
}

export default Layout
