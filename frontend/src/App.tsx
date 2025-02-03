import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import AddExpenseForm from "./components/AddExpenseForm";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-expense">Add Expense</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home</h1>
              <Summary total={0} />
              <ExpenseList expenses={[]} />
            </div>
          }
        />
        <Route path="/add-expense" element={<AddExpenseForm />} />
        {/* <Route path="/expense/:id" element={<ExpenseDetails />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
