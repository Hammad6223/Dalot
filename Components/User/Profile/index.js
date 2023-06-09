import { Box ,Typography,Tabs,Tab,useMediaQuery, Button} from '@mui/material'
import React from 'react'
import Tab2 from './Tab2';
import Tab1 from './Tab1';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';




const index = () => {
  const isSmallscreen = useMediaQuery('(max-width: 600px)');

  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
 const tab ={
//   borderBottom: '6px solid #8F8F8F',
//  borderRadius:'3px'
 }

  const style={
    marginTop:1,
 

    '& .MuiTab-root.Mui-selected':{
     fontSize:{ sm:'16px', lg: '18px'},
     padding:'0px'
    } ,

    '& .MuiTab-root':{
      fontSize:{ sm:'14px', lg: '16px'},
       color:'#7D7C7C',
       textTransform:'capitalize',
       marginRight: {xs:'6%',lg:'6%'}

    },
    
    
 }

  return (
    <Box>
<Box sx={{display:'flex',justifyContent:'space-between'}}> 
     <Typography fontWeight={800}  variant={isSmallscreen ? 'p' : 'h5'}   > Account Settings </Typography>
     <Button variant='outlined'  size={isSmallscreen ? 'small' : 'medium'} >See Public View</Button>
     </Box>
     <Tabs value={activeTab} onChange={handleTabChange}   sx={style}    variant = 'scrollable'  >
<Tab label="Profile" sx={tab}  />
<Tab label="Feedbacks"  sx={tab} />
<Tab label="Transactions" sx={tab} />
<Tab label="Notifications"  sx={tab}/>
<Tab label="Security"  sx={tab}/>
</Tabs>

{activeTab === 0 &&     <Tab1   /> }

{activeTab === 1 &&     <Tab2   /> }

    
{activeTab === 2 &&     <Tab3 /> }
{activeTab === 3 &&     <Tab4   /> }
{activeTab === 4 &&     <Tab5   /> }

    </Box>
  )
}

export default index
