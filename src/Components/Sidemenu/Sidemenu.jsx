import React from 'react'
import './Sidemenu.css'
import { MdDashboard } from 'react-icons/md'
import menu_icon from '../../assets/menu-icon.png'

const Sidemenu = () => {

  //const [mobileMenu, setMobileMenu] = useState(false);
 //const toggleMenu = ()=>{
   //mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
 //}


  return (
    <div className='side-menu'>
      <ul>
        <li><MdDashboard/>Dashboard</li>
        <li>Budget</li>
        <li>Subscriptions</li>
        <li>Expense Records</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
      {/*<img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />*/}
    </div>
  )
}

export default Sidemenu