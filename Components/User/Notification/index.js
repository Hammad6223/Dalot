
import React from 'react'
import { Divider, Grid, Typography, Avatar , IconButton ,CardHeader } from '@mui/material'
import {Cancel,WatchLater,CheckCircle,MoreHoriz} from '@mui/icons-material';

import theme from '@/public/Utils/theme';

const index = () => {
  return (
    <>
    <Typography sx={{marginBottom:1,color:'#767F91',fontWeight:700}} variant='h6' > TODAY </Typography>
    <Grid container sx={{backgroundColor:'rgba(143, 144, 188, 0.15)'}}>

    <Grid item xs={12}>

    <CardHeader
        avatar={ <Avatar sx={{ bgcolor:'#6FCF97' }} aria-label="recipe"><CheckCircle /> </Avatar>}

        action={  <IconButton aria-label="settings"><MoreHoriz  sx={{color:theme.primary}}/>  </IconButton> }

        title={<Typography> <strong> Your listing (ID: 153086) </strong>has been aprroved and live now on Dolat.com </Typography> }

        subheader= {    <Typography sx={{color:theme.primary}}> 1hr ago</Typography> }
      />
      <Divider sx={{color:theme.primary}} />


    <CardHeader

       avatar={ <Avatar sx={{ bgcolor:'#EB5757' }} aria-label="recipe"> <Cancel /> </Avatar>}

       action={  <IconButton aria-label="settings"><MoreHoriz  sx={{color:theme.primary}}/>  </IconButton> }

       title={<Typography> <strong> Your listing (ID: 153086) </strong>has been aprroved and live now on Dolat.com </Typography> }

       subheader= {    <Typography sx={{color:theme.primary}}> 1hr ago</Typography> }
 
       />
       <Divider sx={{color:theme.primary}} />


       <CardHeader
        avatar={ <Avatar sx={{ bgcolor:'#F2C94C' }} aria-label="recipe">  <WatchLater /> </Avatar>}

        action={  <IconButton aria-label="settings"><MoreHoriz  sx={{color:theme.primary}}/>  </IconButton> }

        title={<Typography> <strong> Your listing (ID: 153086) </strong>has been aprroved and live now on Dolat.com </Typography> }

        subheader= {    <Typography sx={{color:theme.primary}}> 1hr ago</Typography> }
      />
      <Divider sx={{color:theme.primary}} />


       <CardHeader
        avatar={ <Avatar sx={{ bgcolor:'#6FCF97' }} aria-label="recipe"><CheckCircle /> </Avatar>}

        action={  <IconButton aria-label="settings"><MoreHoriz  sx={{color:theme.primary}}/>  </IconButton> }

        title={<Typography> <strong> Your listing (ID: 153086) </strong>has been aprroved and live now on Dolat.com </Typography> }

        subheader= {    <Typography sx={{color:theme.primary}}> 1hr ago</Typography> }
      />
      <Divider sx={{color:theme.primary}} />

 

      </Grid>
     

    </Grid>
    </>
  )
}

export default index
