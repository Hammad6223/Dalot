import React from 'react'
import {Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Typography} from '@mui/material';
import {Data} from './Data'
import { useRouter } from 'next/router'

import Header from './Header'

import theme from '@/public/Utils/theme';

const DrawerList = () => {
  const list = {
    '&:hover': { backgroundColor:theme.primary,
    '&, & .MuiListItemIcon-root , .MuiTypography-root ': {
      color: 'white'},
    } ,
   
    paddingX:2
  }
  const [isOpenCollapse, setIsOpenCollapse] = React.useState(null);
  const router = useRouter()
  const handleOpen = (clickedIndex) => {
    if (isOpenCollapse === clickedIndex) {
      setIsOpenCollapse(null);
    } else {
      setIsOpenCollapse(clickedIndex);
    }
  };

  return (
    <>

      <Header />
      <Divider />
   
      <List sx={{marginTop:2.5}}>
         {Data.map((item,index)=>(


         <ListItem key={index} disablePadding sx= {list} onClick= { ()=>router.push(item.link) }>

         <ListItemButton     onClick={() => handleOpen(index)}>

         <ListItemIcon  >
         {item.icon}
         </ListItemIcon>

         <ListItemText primary={ <Typography sx={{fontSize:'16px'}}> {item.Title} </Typography> }  />

         </ListItemButton>
         </ListItem>
       
         ))  }
      

      </List>


    </>
  )
}

export default DrawerList
