import React from "react";

interface SummaryProps {
  total: number;
}

const Summary: React.FC<SummaryProps> = ({ total }) => (
  <h2>Total Spending: ${total}</h2>
);

export default Summary;
