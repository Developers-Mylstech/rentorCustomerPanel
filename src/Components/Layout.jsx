import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTop from './ScrollTotop'

export default function Layout() {
  return (
    <div>
      <ScrollToTop />
      <Header/>
    
      <Outlet/>

      {/* <Footer/> */}
    </div>
  )
}
