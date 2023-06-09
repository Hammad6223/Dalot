import Layout from '@/Components/Site/Layout'
import Banner from '@/Components/Site/Home/Banner'
import AboutUs from '@/Components/Site/Home/AboutUs'
import Blog from '@/Components/Site/Home/Blog'

import { Box } from '@mui/material'
import React from 'react'

const index = () => {
  return (
    <Layout>
      <Banner />
      <Blog />
      <AboutUs />
  
    </Layout>
  )
}

export default index
