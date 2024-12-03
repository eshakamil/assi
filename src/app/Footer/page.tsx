import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <p className='bg-slate-300 text-black text-2xl text-center font-bold p-4 m-10' >I'm footer</p>
      <Link href={"/"}><button className='px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-900 transition mx-10'>back to home page</button></Link>
    </div>
  )
}

export default Footer
