import { Controller, Get, Post, Body } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { Expense } from './schemas/expense.schema';
import { CreateExpenseDto } from './dtos/createExpenseDto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  async createExpense(@Body() createExpenseDto: CreateExpenseDto) {
    return this.expensesService.createExpense(createExpenseDto);
  }

  @Get()
  async findAll(): Promise<Expense[]> {
    return this.expensesService.findAll();
  }
}
