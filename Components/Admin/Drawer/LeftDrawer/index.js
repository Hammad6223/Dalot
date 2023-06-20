import React from 'react'
import { Drawer } from '@mui/material';
import DrawerList from './DrawerList';



const LeftDrawer = ({ handleDrawerToggle, mobileOpen }, props) => {

  const { window } = props;
  const drawerWidth = 250;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer container={container} open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    
        sx={{ display: { xs: 'block', md: 'none' }, border:'none', 
        '& .MuiDrawer-paper , .MuiPaper-root, .mui-style-12i7wg6-MuiPaper-root-MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
       
         }}
         >
        <DrawerList />

      </Drawer>
      <Drawer variant="permanent" open
        sx={{
          display: { xs: 'none', md: 'block' },border:'none',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}  >

        <DrawerList />

      </Drawer>

    </>
  )
}

export default LeftDrawer
