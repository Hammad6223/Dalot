import React from 'react'
import Layout from '@/Components/User/Layout'
import NewListing from '@/Components/User/NewListing'
import LeftBar from '@/Components/User/LeftBar'
import { Grid } from '@mui/material'


const newlisting = () => {

return (

<Layout>
   
   <Grid container marginTop={5}  sx={{width:{xs:'100%',md:'90%' } ,marginX:'auto'}} >

   <Grid item xs={12} md={5} lg={4} paddingRight={{xs:0,md:5}} >
      <LeftBar />
   </Grid>

   <Grid  lg={8} item  md={7} xs={12}  sx={{marginTop: {xs:8 ,md:0} }}> 
   <NewListing />
   </Grid>

   </Grid>
</Layout>
)
}
export default newlisting