import React from 'react'
import Layout from '@/Components/User/Layout'
import MyListing from '@/Components/User/MyListing'
import LeftBar from '@/Components/User/LeftBar'
import { Grid } from '@mui/material'
const mylisting = () => {
  return (
    <Layout>
        <Grid container  sx={{width:{xs:'100%',sm:'80%',md:'90%' } ,marginX:'auto'}} >

            <Grid item xs={12} lg={4} paddingRight={{xs:0,lg:5}} >
                <LeftBar />
            </Grid>
        <Grid  lg={8} item  xs={12}  sx={{marginTop: {xs:8 ,lg:0} }}> 
        
    <MyListing />
</Grid>

    </Grid>
  </Layout>
  )
}

export default mylisting