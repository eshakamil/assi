"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router=useRouter();
  const navigateTo = (route: string)=>{
    router.push(route);
  }
  return (
    <nav className='p-4 bg-slate-300 m-4'>
      <h1 className='text-xl font-bold mb-4'>Navbar</h1>
      <div>
        <Link href={"About"}>
        <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-950 transition mx-3 my-2'>About</button>
        </Link>
        <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-950 transition' onClick={()=>navigateTo('About')}>Go to About page</button>
      </div>

      <div>
        <Link href={"Contact"}>
        <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-950 transition mx-2 my-2'>Contact</button>
        </Link>
        <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-950 transition' onClick={()=>navigateTo('Contact')}>Go to Contact page</button>
      </div>

      <div>
        <Link href={"Footer"}>
        <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-950 transition mx-3 my-2'>Footer</button>
        </Link>
        <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-950 transition' onClick={()=>navigateTo('Footer')}>Go to Footer</button>
      </div>
    </nav>
  )
}

export default Navbar
