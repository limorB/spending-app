import React from "react";
import { Link } from "react-router-dom";
import { IExpense } from "../interfaces/IExpense";

interface ExpenseListProps {
  expenses: IExpense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => (
  <ul>
    {expenses.map((expense) => (
      <li key={expense.id}>
        <Link to={`/expense/${expense.id}`}>
          {expense.description} - ${expense.amount}
        </Link>
      </li>
    ))}
  </ul>
);

export default ExpenseList;
