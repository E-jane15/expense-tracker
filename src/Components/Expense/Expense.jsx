import React from 'react'
import './Expense.css'
import { FaDeleteLeft } from 'react-icons/fa6'
import { BiTrash } from 'react-icons/bi'



const Expense = ({expense ,onDelete}) => {
  return (
    <div className='list'>
        <p>{expense.expenseDate}</p>
        <li>{expense.itemName} </li>
        <p>{expense.category}</p>
        <p>{Number(expense.itemAmount)}FCFA</p>
        <button className='btn1' onClick={onDelete}><BiTrash/></button>
    </div>
  )
}

export default Expense