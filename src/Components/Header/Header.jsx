import React from 'react'
import './Header.css'
import { BiBell,  } from 'react-icons/bi'
import myProfile from '../../assets/myavatar.jpg'

const Header = () => {
  return (
    <div className='container'>
        <h1>Welcome back, Jane!</h1>
        
        <div className='profile'>
         <BiBell className='bell'/>
         <img src={myProfile} alt="" />
        </div>
    </div>
  )
}

export default Header
