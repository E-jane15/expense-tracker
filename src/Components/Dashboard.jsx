import React from 'react'
import Sidemenu from './Sidemenu/Sidemenu'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Expenselist from './Expenselist/Expenselist'
import { useState } from 'react'

const Dashboard = () => {
  const [totalExpenses, setTotalExpenses] = useState(0)
  return (
    <div> 
      <Sidemenu/>
      <Header/>
      <Hero totalExpenses = {totalExpenses}/>
      <Expenselist setTotalExpenses={setTotalExpenses}/>
    </div>
  )
}

export default Dashboard