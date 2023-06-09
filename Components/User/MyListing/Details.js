import theme from '@/public/Utils/theme'
import { Stack,Box,Typography,ListItemIcon ,useMediaQuery,ListItemButton,ListItem,ListItemText,Divider} from '@mui/material'
import { BedOutlined,BathtubOutlined,WeekendOutlined } from '@mui/icons-material';
import React from 'react'

export const Data = [
    
    {
        Text: "2 Bedrooms",
        icon :  <BedOutlined  />,
        type :"Bedroom(s)"
    },
    {
        Text: "2 Bathrooms",
        icon :  <BathtubOutlined   />,
        type :"Bath(s)"
    },
    {
        Text: "2 Receptions",
        icon :  <WeekendOutlined  />,
        type :"Bedroom(s)"
    },
]


const Details = () => {
const isSmallScreen = useMediaQuery('(max-width: 600px)');
return (

<Box>

   {!isSmallScreen  &&
   <Stack  sx={{marginY:3}} spacing={{sm:3,lg:6}} direction={'row'}  >
      { Data.map((item,index)=>(
      <Stack  direction={'row'} spacing={1}  key={index}>
         {item.icon}
         <Typography  sx={{color:theme.light}}> {item.Text} </Typography>
      </Stack>
      ))}
   </Stack>
   }  


   <Stack  sx={{display:{xs:'block',sm:'none'},paddingY:3}}>
      { Data.map((item ,index)=>(
      <Box  key={index}>

         <ListItem  sx={{paddingY:'0px',paddingLeft:'0px'}}>
            <ListItemButton  >
               <ListItemIcon>
                  {item.icon}
               </ListItemIcon>
               <ListItemText primary={item.Text}   />
               {/* {item.Text} */}
            </ListItemButton>
         </ListItem>
         <Divider />

      </Box>
      ))
      }

   </Stack>
</Box>
)
}
export default Details