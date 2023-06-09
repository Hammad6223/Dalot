import { Box ,Typography,Tabs,Tab,useMediaQuery} from '@mui/material'
import React from 'react'
import Tab2 from './Tab2';
import Tab1 from './Tab1';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
const index = () => {

  const isMediumscreen = useMediaQuery('(max-width: 1100px)');
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
 const tab ={
  borderBottom: '6px solid #8F8F8F',
 borderRadius:'3px'
 }

  const style={
    marginTop:3,
 

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
    '& .MuiTabs-indicator':{
     height:'6px',
     borderRadius:'92px'
   }
    
 }

  return (
    <Box>

     <Typography fontWeight={800} variant='h5'> Create a New Listing</Typography>

     <Tabs value={activeTab} onChange={handleTabChange}   sx={style}    variant = 'scrollable'  >
<Tab label="Property Details" sx={tab}  />
<Tab label="Description"  sx={tab} />
<Tab label="Photos" sx={tab} />
<Tab label="Rental Details"  sx={tab}/>
</Tabs>

{activeTab === 0 &&     <Tab1  setActiveTab={setActiveTab}  /> }

{activeTab === 1 &&     <Tab2  setActiveTab={setActiveTab} /> }

    
{activeTab === 2 &&     <Tab3  setActiveTab={setActiveTab} /> }
{activeTab === 3 &&     <Tab4  setActiveTab={setActiveTab} /> }

    </Box>
  )
}

export default index
