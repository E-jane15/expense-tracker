import React, { useState } from "react";
import "./Expenselist.css";
import Expense from "../Expense/Expense";
import Budget from "../Budget/Budget";
import { BiSearch } from "react-icons/bi";

const Expenselist = ({ setTotalExpenses }) => {
  const [budgetModal, setBudgetModal] = useState(false);
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      expenseDate: "01/10/2010",
      itemName: "Grocery",
      category: "Dairy",
      itemAmount: 450,
    },
    {
      id: 2,
      expenseDate: "01/10/2010",
      itemName: "Housekeeping",
      category: "Bills",
      itemAmount: 450,
    },
    {
      id: 3,
      expenseDate: "01/10/2010",
      itemName: "Grocery",
      category: "Fruits",
      itemAmount: 450,
    },
  ]);
  const [expensesFiltered, setExpensesFiltered] = useState([
    {
      id: 1,
      expenseDate: "01/10/2010",
      itemName: "Grocery",
      category: "Dairy",
      itemAmount: 450,
    },
    {
      id: 2,
      expenseDate: "01/10/2010",
      itemName: "Housekeeping",
      category: "Bills",
      itemAmount: 450,
    },
    {
      id: 3,
      expenseDate: "01/10/2010",
      itemName: "Grocery",
      category: "Fruits",
      itemAmount: 450,
    },
  ]);
  const handleAdd = () => {
    setBudgetModal(true);
  };

  const handleDelete=(id)=>{
    setExpenses(expenses.filter(
      (expense)=>expense.id !== id));
  };

  const addExpense = (expense) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newExpense = { id, ...expense };
    setExpenses([...expenses, newExpense]);
    setExpensesFiltered([...expenses, newExpense]);
  };

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const searchEntry = e.target.value;
    if (searchEntry.length > 0) {
      setValue(e.target.value);
      console.log(searchEntry);
      console.log(expenses);
      const searchResult = expenses.filter((expense) =>
        expense.itemName
          .toLocaleLowerCase()
          .includes(searchEntry.toLocaleLowerCase())
      );
      console.log(searchResult);
      setExpensesFiltered(searchResult);
    } else {
      setExpensesFiltered(expenses);
    }
  };

  const totalExpenses = expenses.reduce((total , expense) => {
    const temp = total += +expense.itemAmount
    setTotalExpenses(temp);
    return (temp);
  }, 0);

  return (
    <div className="expense-container">
      {budgetModal ? (
        <Budget
          onAdd={addExpense}
          onCancel={() => {
            setBudgetModal(false);
          }}
        />
      ) : undefined}

      <div className="total">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search expense"
            onChange={handleChange}
          />

          <button className="btn" onClick={handleAdd}>
            Add
          </button>
        </div>

        <h3>List of expenses</h3>
        <div className="list">
          <p>Date</p>
          <li>Expense Name</li>
          <p>Category</p>
          <p>Cost</p>
          <p>Delete</p>
        </div>
        <div>
          {expensesFiltered.map((expense, index) => (
            <div key={index}>
              <Expense key={expense.id} expense={expense} onDelete={handleDelete}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenselist;
