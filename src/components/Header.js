import React,{useState} from 'react'
import { Bars4Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [toggleMent, setToggleMenu] = useState(false)
  return (
    <>
    <header className='clr-1 flex justify-between px-6 py-2  w-[100%]'>
        <a className='font-bold text-white' href='#'>Rajeshwaran</a>
        <nav className='hidden md:block'>
        <ul className='flex text-white'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projests'>Project</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </nav>
        {/* mobile */}
        { toggleMent && <nav className=' block md:hidden'>
        <ul onClick={()=>setToggleMenu(toggle=>!toggle)} className=' clr-4 mobile-nav flex flex-col text-black font-bold'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projests'>Project</a></li>
            <li><a href='#resume'>Resume</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(toggle=>!toggle)} className='block md:hidden'><Bars4Icon className='text-white h-5'/></button>
    </header>
    </>
  )
}

export default Header
