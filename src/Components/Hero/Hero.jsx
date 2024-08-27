import React, { useState } from 'react'
import './Hero.css'


const Hero = ({totalExpenses}) => {
  const [budget,setBudget] = useState(10000);
  const[editing, setEditing] = useState(false);
  const [tempBudget, setTempBudget] = useState(budget);
   //function to toggle editing
   const handleEdit=()=>{
    setEditing(true);
   } 
  //function to handle input change
  const handleInputChange =(e)=>{
      setTempBudget(e.target.value);
  };

  //function to save new budget
  const handleSave=()=>{
    setBudget(tempBudget);
    setEditing(false);
  }
  const balance = budget - +totalExpenses;
  const colorChange = budget < +totalExpenses ? 'color-change' : 'expense';


  return (
    
    <div className='hero'>
            <div className='expense'>
              
              {!editing ?(
                <div className='expense-budget'>
                  <div>
                  <h3>Budget</h3>
                  <p>{budget} FCFA</p>
                  </div>
                <button onClick={handleEdit}>Edit</button>
                  </div>
              ):(
                <div className='expense-budget'>
                  <input type="number" value={tempBudget} onChange={handleInputChange} />
                  <button onClick={handleSave}>Save</button>
                </div>
              )}
              
               </div>

            <div className='expense'>
                <h3>Expenses</h3>
                <p>{totalExpenses} FCFA</p>
            </div>
              <div className={`${colorChange}`}>
                <h3>Balance</h3>
                <p>{balance} FCFA</p>
            </div>
        
    </div>
    
  )
}

export default Hero