import React from 'react'
import {Typography, Box,CardHeader,MenuItem,ListItemIcon,Tooltip,Menu,Avatar, Stack} from '@mui/material';
import Image from 'next/image';
import {ArrowDropDownCircleOutlined,Settings,Logout,Person3}  from '@mui/icons-material';
import theme from '@/public/Utils/theme';

const Data = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    
return (


<Stack direction={'row'} sx={{alignItems:'center'}}>
   <CardHeader sx={{paddingLeft:{xs:0,sm:3}}}
   avatar={  
   <Avatar aria-label="recipe" sx={{display:{xs:'none',sm:'block'},width:45 ,height:45,}}>  
      <Box  sx={{width:45 ,height:45,position:'relative'}}>
      <Image  src="/Images/user.png"   alt="user-image"  fill/>  
     </Box>

    </Avatar>
   }
   title={ 
   <Typography sx={{color:theme.primary,fontWeight:700}} >Mark John </Typography>
   } 
   subheader="Super Admin"
   />
   <Box>
      <Tooltip title="Account settings">
        
         <ArrowDropDownCircleOutlined   onClick={handleClick} sx={{color:'black',marginTop:1}} fontSize='small' />
       
      </Tooltip>
      <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
      elevation: 0,
      sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
      },
      '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
      },
      },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      <MenuItem onClick={handleClose}>
         <ListItemIcon>
            <Person3 fontSize="small" />
         </ListItemIcon>
         Profile
      </MenuItem>
      <MenuItem onClick={handleClose}>
         <ListItemIcon>
            <Settings fontSize="small" />
         </ListItemIcon>
         Settings
      </MenuItem>
      <MenuItem onClick={handleClose}>
         <ListItemIcon>
            <Logout fontSize="small" />
         </ListItemIcon>
         Logout
      </MenuItem>
      </Menu>
   </Box>
</Stack>
)
}
export default Data 