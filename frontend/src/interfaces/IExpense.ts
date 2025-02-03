export interface IExpense {
  id?: number; // Optional, since it may be added later when storing the expense
  description: string;
  amount: number;
}
