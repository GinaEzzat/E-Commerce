import React from 'react'
import Navbar from './Navbar'
import ShopNow from './ShopNow'
import SideTable from './sideTable'
import TopPickes from './TopPickes'
import NewArrivals from './NewArrivals'
import OurBlogs from './OurBlogs'
import Instagram from './Instagram'

const Home = () => {
  return (
    <>
    <Navbar />
    <ShopNow />
    <SideTable />
    <TopPickes />
    <NewArrivals />
    <OurBlogs />
    <Instagram />
    </>
  )
}

export default Home