import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar/page'

function page() {
  return (
    <div>
      <h1 className='text-white bg-slate-950 p-6 m-7 text-center font-bold text-3xl'>HI I'M HOME PAGE</h1>
      <Navbar/>
    </div>
  )
}

export default page
