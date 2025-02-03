import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose'; // Import ValidationError directly
import { CreateExpenseDto } from './dtos/createExpenseDto';
import { Expense, ExpenseDocument } from './schemas/expense.schema';
@Injectable()
export class ExpensesService {
  private readonly logger = new Logger(ExpensesService.name);

  constructor(
    @InjectModel(Expense.name) private expenseModel: Model<ExpenseDocument>,
  ) {}

  async createExpense(createExpenseDto: CreateExpenseDto): Promise<Expense> {
    try {
      const newExpense = new this.expenseModel(createExpenseDto);
      return await newExpense.save();
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        const messages = Object.values(error.errors).map((err) => err.message);
        console.error(error);
        throw new BadRequestException({ message: messages[1] });
      }
      throw new BadRequestException({
        message: 'An unexpected error occurred',
      });
    }
  }

  async findAll(): Promise<Expense[]> {
    //check how to add global logging middleware and applu loggin automatically to all requests.
    this.logger.log('find all request');

    return this.expenseModel.find().exec();
  }
}
