import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../style'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav 
    className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link 
          to='/' className='flex items-center gap-2' 
          onClick={()=>{
              setActive("")
              window.scrollTo(0,0)
            }} >
              <img src={logo} className='w-9 h-9' alt="logo" />
              <p className='flex text-white text-[18px] font-bold cursor-pointer' >Yanno &nbsp;<span className='sm:block hidden' >| 3D Portfolio</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10' >
          {navLinks.map((link)=>(
            <li key={link.id} className={`${active===link.title? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor`} onClick={()=>setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center' >
          <img src={toggle? close: menu} className='w-[25px] h-[25px] object-contain cursor-pointer' alt="hambmenu" onClick={()=>setToggle(!toggle)}/>
          <div className={`${toggle? 'flex' : 'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
            <ul className='list-none flex justify-end items-start flex-col gap-4' >
              {navLinks.map((link)=>(
                <li key={link.id} className={`${active===link.title? "text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[15px]`} 
                  onClick={()=>{
                    setActive(link.title)
                    setToggle(false)
                  }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
            ))}
          </ul>
          </div> 
        </div>
      </div>
    </nav>
  )
}

export default Navbar