import React from 'react'
import HeaderUser from '../components/konsumen/HeaderUser'
import TimeLine from '../components/konsumen/TimeLine'
import TopHeader from '../components/konsumen/TopHeader'
import Footer from '../components/Footer'

function Konsumen() {
  return (
    <div className='container m-auto'>
        <TopHeader/>
        <HeaderUser/>
        <TimeLine/>
        <Footer/>
    </div>
  )
}

export default Konsumen