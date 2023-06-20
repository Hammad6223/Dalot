
import LeftDrawer from "@/Components/Admin/Drawer/LeftDrawer";
import NavBar from "@/Components/Admin/Drawer/NavBar";
import {Box,CssBaseline ,Toolbar} from '@mui/material';
import {GlobalHandleContext} from '@/contexts/DrawerContext'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
      background: {
      default: '#FAFAFA'
    },
}
});
const Layout = ({ children }) => {

  const drawerWidth = 240;
  const Handler = GlobalHandleContext();

  return (
    <ThemeProvider theme={theme}>
     <Box sx={{ display: 'flex' }}>
     <CssBaseline />
     <NavBar handleDrawerToggle={Handler.handleDrawerToggle} />
   
      <Box  component="nav"  aria-label="mailbox folders"  sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }} >
      <LeftDrawer  handleDrawerToggle={Handler.handleDrawerToggle} mobileOpen={Handler.mobileOpen}/>
      </Box>
     
        <Box  component="main"   sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }} >
        <Toolbar />
        {children}
        </Box>

    </Box>
 </ThemeProvider>
  );
};

export default Layout;
