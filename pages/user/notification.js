import React from 'react'
import Layout from '@/Components/User/Layout'
import Notification  from '@/Components/User/Notification '
import LeftBar from '@/Components/User/LeftBar'
import { Grid } from '@mui/material'


const notification = () => {

return (

<Layout>
   
   <Grid container  sx={{width:{xs:'100%',md:'90%' } ,marginX:'auto'}} >

   <Grid item xs={12} md={5} lg={4} paddingRight={{xs:0,md:5}} >
      <LeftBar />
   </Grid>

   <Grid  lg={8} item  md={7} xs={12}  sx={{marginTop: {xs:8 ,md:0} }}> 
   <Notification />
   </Grid>

   </Grid>
</Layout>
)
}
export default notification 