import React from 'react'
import './Sidemenu.css'
import { MdDashboard } from 'react-icons/md'

const Sidemenu = () => {
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
    </div>
  )
}

export default Sidemenu