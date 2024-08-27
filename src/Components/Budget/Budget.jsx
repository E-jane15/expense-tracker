import React, { useState } from "react";
import "./budget.css";

const Budget = ({ onAdd, onCancel }) => {
  const [name, setName] = useState("");
  const [category, setCategory]=useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ itemName: name, itemAmount: amount, expenseDate:date,category:category, description });
    console.log({ name, amount, date, description });
    setName("");
    setCategory("");
    setAmount("");
    setDate("");
    setDescription("");
  };

  return (
    <>
      <div className="budget">
        <h3>Add new expense</h3>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Expense Name</label>
          <input
            type="text"
            placeholder="Enter here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Category</label>
          <select name="category" id="">
            <option value="All">All</option>
            <option value="Food">Food</option>
          </select>

          <input
            type="string"
            placeholder="Enter here"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="">Amount</label>
          <input
            type="number"
            placeholder="Enter here"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor="">Date</label>
          <input
            type="date"
            placeholder="dd/mmm/yyyy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="">Description</label>
          <input
            type="text"
            placeholder="Enter here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="buttons">
            <button className="btn cancel-btn" onClick={onCancel}>
              Cancel
            </button>
            <button className="btn submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Budget;
