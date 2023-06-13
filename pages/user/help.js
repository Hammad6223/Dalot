import React from 'react'
import Layout from '@/Components/User/Layout'
import Help from '@/Components/User/Help'
import LeftBar from '@/Components/User/LeftBar'
import { Grid } from '@mui/material'
const tenancy = () => {
  return (
    <Layout>
        <Grid container  sx={{width:{xs:'100%',sm:'100%',md:'90%' } ,marginX:'auto'}} >

            <Grid item xs={12} lg={4} paddingRight={{xs:0,lg:5}} >
                <LeftBar />
            </Grid>
        <Grid  lg={8} item  xs={12}  sx={{marginTop: {xs:8 ,lg:0} }}> 
        
    <Help/>
</Grid>

    </Grid>
  </Layout>
  )
}

export default tenancy